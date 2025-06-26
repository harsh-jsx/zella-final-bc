import React, { useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import {
  Stack,
  Box,
  Button,
  TextField,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useTheme,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import PortraitIcon from "@mui/icons-material/Portrait";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DiscountIcon from "@mui/icons-material/Discount";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SecurityIcon from "@mui/icons-material/Security";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
const History = ({ setappModal }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isOpen, setisOpen] = useState(false);

  const sideList = [
    {
      label: "Main Balance",
      icon: <AccountBalanceIcon sx={{ color: "#FFB800", fontSize: 30 }} />,
      link: "/profile/history",
    },
    {
      label: "Deposits",
      link: "/profile/history",
    },
    {
      label: "Withdrawls",
      link: "/profile/history",
    },
    {
      label: "Transfers",
      link: "/profile/history",
    },
    {
      label: "Earnings",
      link: "/profile/history",
    },
  ];

  return (
    <>
      <Navbar />
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setisOpen(false)}
        PaperProps={{
          sx: {
            width: "100vw",
            top: "9.5%",
            left: 0,
            right: 0,
            height: "100vh",
            maxHeight: "100vh",
            zIndex: (theme) => theme.zIndex.appBar - 1, // keep navbar visible
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Stack spacing={2} sx={{ p: 3 }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              sx={{ fontSize: 25, fontFamily: "inter", fontWeight: "bold" }}
            >
              History
            </Typography>
            <IconButton onClick={() => setisOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Stack>
          {sideList.map((option) => (
            <Stack
              justifyContent={"flex-start"}
              key={option.label}
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ py: 2, borderBottom: "1px solid #eee" }}
            >
              {option.icon}
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontSize: 14,
                }}
              >
                {option.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Drawer>
      <Stack direction={"row"} sx={{ minHeight: "60vh" }}>
        <Stack
          sx={{
            width: "100%",
            maxWidth: 260,
            borderRight: "1px solid rgba(0, 0, 0, 0.2)",
            display: isMobile ? "none" : "flex",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              padding: "10px 20px",
              fontFamily: "inter",
              fontSize: 16,
              display: "flex",
              alignItems: "center",
              background: "#F0F2F4",
              width: "100%",
              maxWidth: 260,
              gap: 1,
            }}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 16 16"
              fill="none"
              style={{ marginTop: "-2px" }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0605 5.50004L11.6247 4.13686C11.5967 4.04915 11.5028 4.0008 11.4151 4.02889L6.82184 5.50004H12.0605ZM3.68935 5.50004C3.74058 5.4536 3.80233 5.4171 3.87248 5.39464L11.1101 3.07654C11.724 2.87993 12.381 3.21839 12.5772 3.83237L13.1291 5.55887C13.9178 5.76382 14.5 6.4806 14.5 7.33337V8.11385C14.5 8.32575 14.3664 8.51465 14.1666 8.58527C13.5834 8.79142 13.1667 9.34771 13.1667 10C13.1667 10.6524 13.5834 11.2087 14.1666 11.4148C14.3664 11.4854 14.5 11.6743 14.5 11.8862V12.6667C14.5 13.6792 13.6792 14.5 12.6667 14.5H3.33333C2.32081 14.5 1.5 13.6792 1.5 12.6667V11.8862C1.5 11.6743 1.63358 11.4854 1.83338 11.4148C2.41665 11.2087 2.83333 10.6524 2.83333 10C2.83333 9.34771 2.41665 8.79142 1.83338 8.58527C1.63358 8.51465 1.5 8.32575 1.5 8.11385V7.33337C1.5 6.32085 2.32081 5.50004 3.33333 5.50004H3.68935ZM2.5 7.33337C2.5 6.87314 2.8731 6.50004 3.33333 6.50004H12.6667C13.1269 6.50004 13.5 6.87314 13.5 7.33337V7.78854C12.7075 8.20747 12.1667 9.0401 12.1667 10C12.1667 10.96 12.7075 11.7926 13.5 12.2115V12.6667C13.5 13.1269 13.1269 13.5 12.6667 13.5H3.33333C2.8731 13.5 2.5 13.1269 2.5 12.6667V12.2115C3.29251 11.7926 3.83333 10.96 3.83333 10C3.83333 9.0401 3.29251 8.20747 2.5 7.78854V7.33337Z"
                fill="#121214"
              ></path>
              <path
                d="M13.5 0.5L13.5404 0.74259C13.6666 1.49947 14.2476 2.09952 15 2.25C14.2476 2.40048 13.6666 3.00053 13.5404 3.75741L13.5 4L13.4611 3.76801C13.3338 3.00905 12.7535 2.40615 12 2.25C12.7524 2.09952 13.3334 1.49947 13.4596 0.74259L13.5 0.5Z"
                fill="#F7A600"
              ></path>
              <path
                d="M7.81647 7.94481C7.87605 7.76953 8.12395 7.76953 8.18353 7.94482L8.57241 9.08883H9.80579C9.99568 9.08883 10.0723 9.33357 9.91636 9.44189L8.92617 10.1296L9.30909 11.2561C9.36927 11.4331 9.16859 11.5843 9.01498 11.4777L8 10.7728L6.98502 11.4777C6.83142 11.5843 6.63073 11.4331 6.69091 11.2561L7.07383 10.1296L6.08364 9.44189C5.92767 9.33357 6.00432 9.08883 6.19421 9.08883H7.4276L7.81647 7.94481Z"
                fill="#F7A600"
              ></path>
            </svg>
            Main Balance
          </Typography>
          <Stack
            direction={"column"}
            alignItems={"flex-end"}
            justifyContent={"center"}
          >
            {[
              "All transactions",
              "Deposits",
              "Withdrawals",
              "Transfers",
              "Earnings",
            ].map((item, index) => (
              <Box
                sx={{
                  width: "85%",
                  padding: "4px 8px",
                  background: index == 0 && "#F0F2F4",
                  fontSize: 12,
                  fontFamily: "inter",
                  color: "#08080c",
                  mt: 1,
                }}
              >
                {item}
              </Box>
            ))}
          </Stack>
          <Typography
            variant="h6"
            sx={{
              padding: "10px 20px",
              fontFamily: "inter",
              fontSize: 16,
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: 260,
              mt: 1,
              borderTop: "1px solid rgba(0, 0, 0, 0.2)",
            }}
          >
            {" "}
            <svg
              class="history__content__nav__main__icon"
              role="img"
              fill="none"
              viewBox="0 0 16 17"
              height="17"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "13px", width: "20px", height: "20px" }}
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M13.5 14h-11M8 11.5V3m0 0l3 3M8 3L5 6"
                stroke="#121214"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Export
          </Typography>
        </Stack>
        <Stack sx={{ p: "24px", width: "100%", mb: 2 }}>
          <Typography
            sx={{ fontSize: 20, fontFamily: "inter-bold", color: "#08080c" }}
          >
            History - All Transactions
          </Typography>
          {isMobile ? (
            <>
              <Stack minHeight={"5vh"}>
                <Button
                  variant="outlined"
                  sx={{ borderRadius: 50, mt: 2 }}
                  onClick={() => setisOpen(true)}
                >
                  Other Sections
                </Button>
              </Stack>
            </>
          ) : (
            <></>
          )}
          <TextField label="Address, TXID/HASH" sx={{ mt: 2 }} />

          <Box sx={{ width: "100%", mt: 5 }}>
            <Table sx={{ border: "none" }}>
              <TableHead
                sx={{
                  borderRadius: 50,
                }}
              >
                <TableRow
                  sx={{
                    border: "none",
                    background: "#F0F2F4",
                    padding: "16px 0",
                    display: isMobile ? "none" : "flex",
                  }}
                >
                  <TableCell
                    sx={{
                      fontSize: 12,
                      fontFamily: '"Roboto", sans-serif',
                      padding: "0 16px",
                      fontWeight: 400,
                      color: "rgba(0, 0, 0, .6)",
                    }}
                  >
                    TXID
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 12,
                      fontFamily: '"Roboto", sans-serif',
                      padding: "0 16px",
                      fontWeight: 400,
                      color: "rgba(0, 0, 0, .6)",
                    }}
                  >
                    Created (DD/MM)
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 12,
                      fontFamily: '"Roboto", sans-serif',
                      padding: "0 16px",
                      fontWeight: 400,
                      color: "rgba(0, 0, 0, .6)",
                    }}
                  >
                    Address
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 12,
                      fontFamily: '"Roboto", sans-serif',
                      padding: "0 16px",
                      fontWeight: 400,
                      color: "rgba(0, 0, 0, .6)",
                    }}
                  >
                    Amount
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 12,
                      fontFamily: '"Roboto", sans-serif',
                      padding: "0 16px",
                      fontWeight: 400,
                      color: "rgba(0, 0, 0, .6)",
                    }}
                  >
                    Commission
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 12,
                      fontFamily: '"Roboto", sans-serif',
                      padding: "0 16px",
                      fontWeight: 400,
                      color: "rgba(0, 0, 0, .6)",
                    }}
                  >
                    Type
                  </TableCell>
                  <TableCell
                    sx={{
                      fontSize: 12,
                      fontFamily: '"Roboto", sans-serif',
                      padding: "0 16px",
                      fontWeight: 400,
                      color: "rgba(0, 0, 0, .6)",
                    }}
                  >
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
            <Stack
              sx={{
                width: "100%",
                height: 184,
                padding: "32px 0 !important",
                "&:hover": {
                  background: "#F0F2F4",
                },
                mt: 2,
              }}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Stack alignItems={"center"} gap={2}>
                <img
                  src="https://bit-frame.net/assets/img/empty-list.svg"
                  alt="center"
                  style={{ width: 124, height: 90 }}
                />
                <Typography sx={{ fontFamily: "Roboto", fontSize: 12 }}>
                  No Records
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
      <Footer seamless={true} />
    </>
  );
};

export default History;
