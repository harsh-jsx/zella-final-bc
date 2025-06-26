import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import MobileWallet from "../component/MobileWallet";
import PcWallet from "../component/PcWallet";
import { Box, useMediaQuery, useTheme, Stack } from "@mui/material";
import Deposit from "../component/Deposit";
import Withdrawl from "../component/Withdrawl";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Footer from "../component/Footer";
import CircularProgress from "@mui/material/CircularProgress";

const assets = [
  {
    symbol: "BTCUSDT",
    name: "Bitcoin",
    shortname: "BTC",
    icon: "https://bit-frame.net/assets/img/coins/BTC.png",
    chains: [
      {
        name: "Bitcoin",
        address: "bc1qjtz05j8tx4cz8ctv9c6pt08upnljettg3tmtwy",
      },
    ],
  },
  {
    symbol: "ETHUSDT",
    name: "Ethereum",
    shortname: "ETH",
    icon: "https://bit-frame.net/assets/img/coins/ETH.png",
    chains: [
      {
        name: "Ethereum",
        address: "ETH ChAIN KA ADDY BC",
      },
    ],
  },
  {
    symbol: "USDT",
    name: "Tether",
    shortname: "USDT",
    icon: "https://bit-frame.net/assets/img/coins/USDT.png",
    chains: [
      {
        name: "TRC20",
        address: "TX7ByApuvevk4hfDRXSYNUQbowzBqTf8fE",
      },
      {
        name: "ERC20",
        address: "ERC20 ChAIN",
      },
      {
        name: "BEP20",
        address: "BEP20 ChAIN",
      },
    ],
  },

  {
    symbol: "BNBUSDT",
    name: "BNB",
    shortname: "BNB",
    icon: "https://bit-frame.net/assets/img/coins/BNB.png",
    chains: [
      {
        name: "BSC",
        address: "BSC ChAIN KA ADDY BC",
      },
      {
        name: "BNB",
        address: "BNB ChAIN KA ADDY BC",
      },
    ],
  },
  {
    symbol: "SOLUSDT",
    name: "Solana",
    shortname: "SOL",
    icon: "https://bit-frame.net/assets/img/coins/SOL.png",
    chains: [
      {
        name: "Solana",
        address: "CBy24cc65xrHazjgbHeYpJWvX5ekURP1jm99S68bfgc7",
      },
    ],
  },
  {
    symbol: "USDCBNB",
    name: "USD Coin",
    shortname: "USDC",
    icon: "https://bit-frame.net/assets/img/coins/USDC.png",
    chains: [
      {
        name: "TRC20",
        address: "TX7ByApuvevk4hfDRXSYNUQbowzBqTf8fE",
      },
      {
        name: "ERC20",
        address: "ERC20 ChAIN",
      },
      {
        name: "BEP20",
        address: "BEP20 ChAIN",
      },
    ],
  },
  {
    symbol: "XRPUSDT",
    name: "Ripple",
    shortname: "XRP",
    icon: "https://bit-frame.net/assets/img/coins/XRP.png",
    chains: [
      {
        name: "XRP",
        address: "rMxLDMiJY7F27gV88Jk2QtFm6UW2EhvBks",
      },
    ],
  },
  {
    symbol: "DOGEUSDT",
    name: "Dogecoin",
    shortname: "DOGE",
    icon: "https://bit-frame.net/assets/img/coins/DOGE.png",
    chains: [
      {
        name: "Dogecoin",
        address: "DC6WRTe7UY1ustsVBrnkJvrEQ2tgMwBFxZ",
      },
    ],
  },
  {
    symbol: "TONUSDT",
    name: "Toncoin",
    shortname: "TON",
    icon: "https://bit-frame.net/assets/img/coins/TON.png",
    chains: [
      {
        name: "Toncoin",
        address: "UQD85L2ZuArY3f8CFEFf2Ssnf9Y5y1ee",
      },
    ],
  },
  {
    symbol: "TRXUSDT",
    name: "TRON",
    shortname: "TRX",
    icon: "https://bit-frame.net/assets/img/coins/TRX.png",
    chains: [
      {
        name: "TRON",
        address: "TRON ChAIN KA ADDY BC",
      },
    ],
  },
  {
    symbol: "ADAUSDT",
    name: "Cardano",
    shortname: "ADA",
    icon: "https://bit-frame.net/assets/img/coins/ADA.png",
    chains: [
      {
        name: "Cardano",
        address: "ADA ChAIN KA ADDY BC",
      },
    ],
  },
  {
    symbol: "AVAXUSDT",
    name: "Avalanche",
    shortname: "AVAX",
    icon: "https://bit-frame.net/assets/img/coins/AVAX.png",
    chains: [
      {
        name: "Avalanche",
        address: "AVAX ChAIN KA ADDY BC",
      },
    ],
  },
  {
    symbol: "WBTCUSDT",
    name: "Wrapped Bitcoin",
    shortname: "WBTC",
    icon: "https://bit-frame.net/assets/img/coins/WBTC.png",
  },
];

const Wallet = ({ setappModal }) => {
  const [user, loading] = useAuthState(auth);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const searchParams = new URLSearchParams(window.location.search);
  const modal = searchParams.get("modal");
  const [coinSelect, setcoinSelect] = useState(0);
  const [depositModal, setdepositModal] = useState(
    modal === "deposit" ? true : false
  );
  const [withdrawlModal, setwithdrawlModal] = useState(
    modal === "withdrawl" ? true : false
  );

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      window.location.href = "/login";
    }
  }, [user, loading, depositModal]);

  if (loading) {
    return (
      <>
        <Stack
          height="100vh"
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <CircularProgress />
        </Stack>
      </>
    );
  }

  return (
    <div style={{ background: "#F0F2F4", minHeight: "100vh" }}>
      <Navbar setappModal={setappModal} />
      {depositModal && (
        <Deposit
          assets={assets}
          depositModal={depositModal}
          setdepositModal={setdepositModal}
          coinSelect={coinSelect}
          setcoinSelect={setcoinSelect}
        />
      )}
      {withdrawlModal && (
        <Withdrawl assets={assets} setwithdrawlModal={setwithdrawlModal} />
      )}
      {isMobile ? (
        <MobileWallet
          assets={assets}
          setdepositModal={setdepositModal}
          setwithdrawlModal={setwithdrawlModal}
          coinSelect={coinSelect}
          setcoinSelect={setcoinSelect}
        />
      ) : (
        <PcWallet
          assets={assets}
          depositModal={depositModal}
          withdrawlModal={withdrawlModal}
          setdepositModal={setdepositModal}
          setwithdrawlModal={setwithdrawlModal}
          coinSelect={coinSelect}
          setcoinSelect={setcoinSelect}
        />
      )}
      <Footer />
    </div>
  );
};

export default Wallet;
