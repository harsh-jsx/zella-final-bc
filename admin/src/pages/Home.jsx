import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SmallCard from "../component/SmallCard";
import UserTable from "../component/UserTable";
import LiveTrades from "../component/LiveTrades";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = ({ open }) => {
  const [trades, settrades] = useState([]);
  const [user] = useAuthState(auth);
  const [weeklyDeposit, setweeklyDeposit] = useState(0);
  const [totalDeposits, settotalDeposits] = useState(0);
  const [totalwidhdrawl, settotalwidhdrawl] = useState(0);

  useEffect(() => {
    const queryMessages = query(
      collection(db, "orders"),
      where("isOrderActive", "==", true)
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), key: doc.id });
      });
      settrades(messages);
    });
    // Fetch weekly transactions
    const startOfWeek = new Date();
    startOfWeek.setHours(0, 0, 0, 0);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 7);

    const weeklyQuery = query(
      collection(db, "transactions"),
      where("createdAt", ">=", startOfWeek),
      where("createdAt", "<", endOfWeek)
    );

    const unsubscribeWeekly = onSnapshot(weeklyQuery, (snapshot) => {
      let data = snapshot.docs.map((doc) => doc.data());
      let weeklyDeposit = 0;

      const totalDeposits = data.map((trans) =>
        trans.type == "Deposit"
          ? (weeklyDeposit = weeklyDeposit + trans.amount)
          : 0
      );

      setweeklyDeposit(weeklyDeposit);
    });

    const depositQeury = query(collection(db, "transactions"));

    const unsubscribedeposit = onSnapshot(depositQeury, (snapshot) => {
      let data = snapshot.docs.map((doc) => doc.data());
      let weeklyDeposit = 0;
      let totalwidhdrawlamount = 0;

      const totalDeposits = data.map((trans) =>
        trans.type == "Deposit"
          ? (weeklyDeposit = weeklyDeposit + trans.amount)
          : 0
      );

      const totalwidhdrawl = data.map((trans) =>
        trans.type == "Withdrawal"
          ? (totalwidhdrawlamount = totalwidhdrawlamount + trans.amount)
          : 0
      );

      settotalDeposits(weeklyDeposit);
      settotalwidhdrawl(totalwidhdrawlamount);
    });

    return () => {
      unsuscribe();
      unsubscribeWeekly();
      unsubscribedeposit();
    };
  }, []);

  return (
    <Stack spacing={2} alignItems="center" sx={{ mt: 3, width: "100%" }}>
      <Stack spacing={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={5}
        >
          <SmallCard label="Active Trades" value={trades.length || 0} />
          <SmallCard label="Weekly Deposit" value={weeklyDeposit || 0} />
          <SmallCard label="Total Deposit" value={totalDeposits} />
          <SmallCard label="Total Withdrawl" value={totalwidhdrawl} />
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="h6"
            sx={{ py: 2, fontWeight: "bold", fontSize: 25 }}
          >
            Live Trades
          </Typography>

          <Button sx={{ fontWeight: "bold" }}>See All</Button>
        </Stack>
        <LiveTrades trades={trades} />

        <Stack direction="row" justifyContent="space-between">
          <Typography
            variant="h6"
            sx={{ py: 2, fontWeight: "bold", fontSize: 25 }}
          >
            Users
          </Typography>

          <Button sx={{ fontWeight: "bold" }}>See All</Button>
        </Stack>
        <UserTable />
      </Stack>
    </Stack>
  );
};

export default Home;
