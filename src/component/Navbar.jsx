import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  Avatar,
  Paper,
  Stack,
  ListItemButton,
  Collapse,
} from "@mui/material";
import toast from "react-hot-toast";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BuildIcon from "@mui/icons-material/Build";
import SavingsIcon from "@mui/icons-material/Savings";
import logo from "./logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useAuthState } from "react-firebase-hooks/auth";
import BookIcon from "@mui/icons-material/Book";
import { auth, db } from "../firebase";
import { getDoc, doc } from "firebase/firestore";
import { signOutUser } from "../lib/authController";
import { useNavigate } from "react-router-dom";
import { heikinashi } from "technicalindicators";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const navItems = [
  {
    label: "Trading",
    icon: <ShowChartIcon sx={{ color: "#FFB800" }} />,
    dropdown: [
      {
        header: "Markets",
        link: "err",

        subHeader: "View the latest crypto prices and volume",
        icon: (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              xmlns="http://www.w3.org/2000/svg"
              x="2"
              y="14"
              width="4"
              height="10"
              fill="#474752"
            ></rect>
            <rect
              xmlns="http://www.w3.org/2000/svg"
              x="18"
              y="7"
              width="4"
              height="17"
              fill="#474752"
            ></rect>
            <rect
              xmlns="http://www.w3.org/2000/svg"
              x="10"
              y="12"
              width="4"
              height="12"
              fill="#474752"
            ></rect>
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 4C21.1046 4 22 3.10457 22 2C22 0.895431 21.1046 0 20 0C18.8954 0 18 0.895431 18 2C18 2.14366 18.0151 2.28377 18.0439 2.41884L13.5084 4.68671C13.1418 4.26593 12.6019 4 12 4C10.9005 4 10.0083 4.88718 10.0001 5.98471L5.75787 7.04531C5.41897 6.42261 4.75884 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10C5.09937 10 5.99157 9.11297 5.99994 8.01557L10.2423 6.95494C10.5812 7.5775 11.2413 8 12 8C13.1046 8 14 7.10457 14 6C14 5.85627 13.9848 5.71608 13.956 5.58094L18.4914 3.31313C18.8581 3.73401 19.398 4 20 4Z"
              fill="#ffc014"
            ></path>
          </svg>
        ),
      },
      {
        header: "Swap",
        link: "/swap",

        subHeader: "Quick conversion, zero tr ading fees, no slippage",
        icon: (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              xmlns="http://www.w3.org/2000/svg"
              clip-path="url(#clip0_12306_192928)"
            >
              <path
                d="M18.499 5.90229L23.339 1.17005M23.339 1.17005L18.9989 1.17001M23.339 1.17005L23.3391 5.40234"
                stroke="#ffc014"
                stroke-width="1.2"
              ></path>
              <path
                d="M5.45611 18.5726L0.616063 23.3048M0.616063 23.3048L4.95614 23.3048M0.616063 23.3048L0.615974 19.0725"
                stroke="#ffc014"
                stroke-width="1.2"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.499 19.4023C16.365 19.4023 19.499 16.2683 19.499 12.4023C19.499 8.53635 16.365 5.40234 12.499 5.40234C8.63303 5.40234 5.49902 8.53635 5.49902 12.4023C5.49902 16.2683 8.63303 19.4023 12.499 19.4023ZM15.124 9.77734H9.87402V15.0273H15.124V9.77734Z"
                fill="#474752"
              ></path>
            </g>
            <defs xmlns="http://www.w3.org/2000/svg">
              <clipPath id="clip0_12306_192928">
                <rect width="24" height="24" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        ),
      },
      {
        header: "Spot",
        link: "err",

        subHeader: "Buy and sell crypto with ease",
        icon: (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.9966 15.7488C21.4487 14.8618 23.9997 11.7288 23.9997 8C23.9997 3.58172 20.418 0 15.9997 0C12.2709 0 9.13799 2.55107 8.25098 6.00309C13.5742 6.13436 17.8654 10.4255 17.9966 15.7488Z"
              fill="#474752"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M24 20.5H19M19 20.5L21.5 18M19 20.5L21.5 23"
              stroke="#474752"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M0 3.5H5M5 3.5L2.5 1M5 3.5L2.5 6"
              stroke="#474752"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 24C12.4183 24 16 20.4183 16 16C16 11.5817 12.4183 8 8 8C3.58172 8 0 11.5817 0 16C0 20.4183 3.58172 24 8 24ZM11 13H5V19H11V13Z"
              fill="#ffc014"
            ></path>
          </svg>
        ),
      },
      {
        header: "Margin",
        link: "err",

        subHeader: "Trade with leverage",
        icon: (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 14C20.866 14 24 10.866 24 7C24 3.13401 20.866 0 17 0C13.134 0 10 3.13401 10 7C10 10.866 13.134 14 17 14ZM19 5H15V9H19V5Z"
              fill="#ffc014"
            ></path>
            <circle
              xmlns="http://www.w3.org/2000/svg"
              cx="4"
              cy="14"
              r="4"
              fill="#474752"
            ></circle>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M0.5 21.5L23.5 15"
              stroke="#474752"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M12 21L9 24H15L12 21Z"
              fill="#474752"
            ></path>
          </svg>
        ),
      },
      {
        header: "Tournament",
        link: "err",

        subHeader: "Increase your trading volume with our Trading Tournament",
        icon: (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24 3H20V5H22V7C22 8.10457 21.1046 9 20 9V11C22.2091 11 24 9.20914 24 7V3Z"
              fill="#474752"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 3H4V5H2V7C2 8.10457 2.89543 9 4 9V11C1.79086 11 0 9.20914 0 7V3Z"
              fill="#474752"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 0H20V10C20 14.0796 16.9463 17.446 13 17.9381V22H14C15.1046 22 16 22.8954 16 24H8C8 22.8954 8.89543 22 10 22H11V17.9381C7.05369 17.446 4 14.0796 4 10V0Z"
              fill="#474752"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M13 9V0H18V9L15.5 6.63158L13 9Z"
              fill="#ffc014"
            ></path>
          </svg>
        ),
      },
    ],
  },
  {
    label: "Futures",
    icon: <TrendingUpIcon sx={{ color: "#FFB800" }} />,
    dropdown: [
      {
        header: "USDT Perpetuals",
        link: "err",
        subHeader: "Trade perpetual contracts, settled in USDT",
        icon: (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              xmlns="http://www.w3.org/2000/svg"
              clip-path="url(#clip0_12306_192926)"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 0H4V24H20V0ZM17 5H7V7H17V5ZM7 9H16V11H7V9ZM17 13H7V15H17V13Z"
                fill="#474752"
              ></path>
              <path
                d="M0 18H3V24C1.34315 24 0 22.6569 0 21V18Z"
                fill="#474752"
              ></path>
              <circle cx="20" cy="20" r="5" fill="#2D2D32"></circle>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 24C22.2091 24 24 22.2091 24 20C24 17.7909 22.2091 16 20 16C17.7909 16 16 17.7909 16 20C16 22.2091 17.7909 24 20 24ZM21.5 18.5H18.5V21.5H21.5V18.5Z"
                fill="#ffc014"
              ></path>
            </g>
            <defs xmlns="http://www.w3.org/2000/svg">
              <clipPath id="clip0_12306_192926">
                <rect width="24" height="24" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        ),
      },
    ],
  },
  {
    label: "Tools",
    icon: <BuildIcon sx={{ color: "#FFB800" }} />,
    dropdown: [
      {
        header: "Market Cap",
        link: "/market-cap",
        subHeader:
          "An indicator that reflects the total value of all coins of a certain cryptocurrency on the market",
        icon: (
          <img
            src="https://bit-frame.net/assets/img/header/market-cap.svg"
            alt="market-cap"
          />
        ),
      },
      {
        header: "Market Screener",
        link: "/screener",
        subHeader:
          "A tool that allows you to filter and track different cryptocurrencies based on multiple criteria",
        icon: (
          <img
            src="https://bit-frame.net/assets/img/header/market-screener.svg"
            alt="market-cap"
          />
        ),
      },
      {
        header: "Cross Rates",
        link: "/cross-rates",
        subHeader:
          "Exchange rates between two currencies expressed through a third currency",
        icon: (
          <img
            src="https://bit-frame.net/assets/img/header/cross-rates.svg"
            alt="market-cap"
          />
        ),
      },
      {
        header: "Currency Heat map",
        link: "/heat-map",
        subHeader:
          "A visual tool that displays price changes of different cryptocurrencies against each other in the form of a colored map",
        icon: (
          <img
            src="https://bit-frame.net/assets/img/header/heat-map.svg"
            alt="market-cap"
          />
        ),
      },
      // {
      //   header: "Technical Analysis",
      //   link: "/tech-anal",
      //   subHeader:
      //     "A method for predicting future price movements of cryptocurrencies based on analysis of past market data",
      //   icon: (
      //     <img
      //       src="https://bit-frame.net/assets/img/header/technical-analysis.svg"
      //       alt="market-cap"
      //     />
      //   ),
      // },
    ],
  },
  {
    label: "Earn",
    icon: <SavingsIcon sx={{ color: "#FFB800" }} />,
    dropdown: [
      {
        header: "Staking",
        link: "/staking",
        subHeader: "Easily stake your coins in PoS by voting and reap rewards",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 12C10.7614 12 13 9.76142 13 7C13 4.23858 10.7614 2 8 2C5.23858 2 3 4.23858 3 7C3 9.76142 5.23858 12 8 12ZM5.0525 7.94478C4.80307 5.69991 6.69991 3.80307 8.94478 4.0525L9.05522 3.05861C6.17343 2.73841 3.73841 5.17343 4.05861 8.05522L5.0525 7.94478Z"
              fill="#ffc014"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.07649 13.3621C5.02608 13.6739 5 13.9926 5 14.3167C5 16.313 5.98941 18.1041 7.5566 19.3245C7.82587 19.5342 8 19.8533 8 20.1998V20.9756C8 21.5413 8.44772 22 9 22H10C10.5523 22 11 21.5413 11 20.9756V20.8424C11.4847 20.9297 11.9863 20.9756 12.5 20.9756C13.0137 20.9756 13.5153 20.9297 14 20.8424V20.9756C14 21.5413 14.4477 22 15 22H16C16.5523 22 17 21.5413 17 20.9756V20.1998C17 19.8533 17.1741 19.5343 17.4433 19.3246C18.3417 18.625 19.0502 17.738 19.4913 16.7323C19.625 16.4274 19.9108 16.2128 20.237 16.2128C20.6584 16.2128 21 15.8628 21 15.4311V12.9836C21 12.5039 20.6204 12.115 20.1522 12.115C19.8066 12.115 19.5003 11.8975 19.3423 11.5826C18.9228 10.7466 18.3255 10.0024 17.5865 9.39277C17 9.04129 17.3936 7.05596 17.761 6.40002C17.872 6.20187 17.7369 5.97086 17.5161 6.00302C16.2228 6.19137 15.1122 7.27581 15 8.01661C14.9092 8.61602 14.723 9.18419 14.458 9.70542C13.4 12.2281 10.9069 14 8 14C6.95641 14 5.96616 13.7716 5.07649 13.3621ZM18 13.1395C18 13.7053 17.5523 14.1639 17 14.1639C16.4477 14.1639 16 13.7053 16 13.1395C16 12.5737 16.4477 12.115 17 12.115C17.5523 12.115 18 12.5737 18 13.1395Z"
              fill="#474752"
            ></path>
          </svg>
        ),
      },
      {
        header: "Crypto Lending",
        link: "/profile/wallet?modal=deposit",
        subHeader: "Earn passive income with digital currencies",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <g id="Structured Products">
              <g id="Union">
                <path
                  d="M5.65627 7.83772C5.79297 8.18411 5.60957 8.57068 5.24663 8.70114L1.95733 9.88356L10.9997 13.7306L20.0424 9.8871L16.7531 8.70468C16.3901 8.57422 16.2067 8.18765 16.3434 7.84126C16.4801 7.49487 16.8852 7.31983 17.2481 7.4503L21.2852 8.90151C22.2379 9.24399 22.2379 10.5302 21.2852 10.8727L11.3887 15.0231C11.138 15.1133 10.8615 15.1133 10.6108 15.0231L0.714542 10.8691C-0.238176 10.5267 -0.238185 9.24045 0.714541 8.89797L4.7516 7.44676C5.11454 7.31629 5.51957 7.49133 5.65627 7.83772Z"
                  fill="#474752"
                ></path>
                <path
                  d="M1.50576 14.0535C1.64234 13.7078 2.04664 13.5333 2.40879 13.6637L10.9997 17.3496L19.5918 13.6747C19.954 13.5446 20.3582 13.7193 20.4946 14.065C20.631 14.4107 20.4479 14.7965 20.0857 14.9267L11.3876 18.6395C11.1373 18.7295 10.8612 18.7294 10.6109 18.6393L1.91418 14.9153C1.55203 14.785 1.36917 14.3991 1.50576 14.0535Z"
                  fill="#474752"
                ></path>
                <path
                  d="M18.4756 18.7785C18.8385 18.6481 19.022 18.2615 18.8854 17.9151C18.7488 17.5687 18.3438 17.3936 17.9808 17.524L10.9967 20.6401L4.01069 17.5368C3.64758 17.4068 3.24278 17.5823 3.10654 17.9288C2.9703 18.2754 3.15421 18.6617 3.51732 18.7918L10.6092 21.933C10.8595 22.0226 11.1354 22.0224 11.3856 21.9326L18.4756 18.7785Z"
                  fill="#474752"
                ></path>
              </g>
              <path
                id="Union_2"
                d="M11.1187 8.15005e-05C11.5093 0.0058254 11.8198 0.313724 11.8122 0.687792L11.7939 1.59092L13.1073 1.61023C13.4979 1.61598 13.8084 1.92387 13.8008 2.29794C13.7932 2.67201 13.4704 2.9706 13.0799 2.96485L10.1163 2.92127C9.46529 2.9117 8.92733 3.40934 8.91469 4.03279C8.90206 4.65623 9.41954 5.1694 10.0705 5.17897L11.9564 5.2067C13.3886 5.22776 14.527 6.35673 14.4993 7.72831C14.4715 9.09989 13.288 10.1947 11.8558 10.1736L11.6201 10.1702L11.6018 11.0732C11.5942 11.4473 11.2714 11.7459 10.8808 11.7401C10.4902 11.7344 10.1798 11.4265 10.1873 11.0524L10.2056 10.1494L8.69679 10.1301C8.30621 10.1243 7.99572 9.81642 8.0033 9.44235C8.01088 9.06828 8.33365 8.7697 8.72424 8.77544L11.8832 8.81902C12.5342 8.8286 13.0722 8.33095 13.0848 7.70751C13.0975 7.08406 12.58 6.5709 11.929 6.56132L10.0431 6.53359C8.61092 6.51253 7.47246 5.38357 7.50025 4.01199C7.52804 2.6404 8.71156 1.54559 10.1437 1.56665L10.3794 1.57012L10.3977 0.666991C10.4053 0.292923 10.7281 -0.00566238 11.1187 8.15005e-05Z"
                fill="#ffc014"
              ></path>
            </g>
          </svg>
        ),
      },
    ],
  },
  {
    label: "Buy Crypto",
    icon: <ShoppingCartIcon sx={{ color: "#FFB800" }} />,
    dropdown: [
      {
        header: "Fiat Deposit",
        link: "err",
        subHeader: "Buy crypto within seconds via Bank Transfer or Bank Card",
        icon: (
          <img
            src="https://bit-frame.net/assets/img/header/card.png"
            alt="market-cap"
            style={{ width: 24, height: 24 }}
          />
        ),
      },
      {
        header: "P2P Trading",
        link: "err",

        subHeader: "Buy crypto using local payment methods",
        icon: (
          <img
            src="https://bit-frame.net/assets/img/header/p2p.png"
            alt="market-cap"
            style={{ width: 24, height: 24 }}
          />
        ),
      },
    ],
  },
  {
    label: "Documentation",
    icon: <BookIcon sx={{ color: "#FFB800" }} />,
    dropdown: [
      {
        header: "User Agreement",
        link: "/user-agreement",
        subHeader:
          "The User Agreement defines the terms of service, user rights, and obligations of both parties.",
        icon: (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.2 4H4V22H15.2H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8.8C20 7.11984 20 6.27976 19.673 5.63803C19.3854 5.07354 18.9265 4.6146 18.362 4.32698C17.7202 4 16.8802 4 15.2 4ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9ZM7.41602 14.9997C8.18765 13.2339 9.94964 12 11.9998 12C14.0503 12 15.8124 13.2343 16.5839 15.0003C15.8123 16.7661 14.0503 18 12.0001 18C9.94967 18 8.1875 16.7657 7.41602 14.9997Z"
              fill="#474752"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M4 3L14.0768 0.674578C15.5723 0.329475 17 1.46525 17 3H4Z"
              fill="#ffc014"
            ></path>
          </svg>
        ),
        link: "/user-agreement",
      },
      {
        header: "AML Policy",
        link: "/aml-policy",
        subHeader:
          "Policy on combating money laundering, countering the financing of terrorism",
        icon: (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              xmlns="http://www.w3.org/2000/svg"
              clip-path="url(#clip0_16363_3845)"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.6116 4.41235L13.4643 0H6.53613L8.38884 4.41235C8.90935 4.3059 9.44826 4.25 10.0002 4.25C10.5522 4.25 11.0911 4.3059 11.6116 4.41235Z"
                fill="#474752"
              ></path>
              <path
                d="M18 24L2 24V13C2 8.58172 5.58172 5 10 5C14.4183 5 18 8.58172 18 13V24Z"
                fill="#474752"
              ></path>
              <circle
                cx="18"
                cy="9"
                r="5.5"
                fill="#ffc014"
                stroke="#2D2D32"
              ></circle>
              <path d="M17 6H18.33V10H17V6Z" fill="#2D2D32"></path>
              <path d="M18 10V8.67H20V10H18Z" fill="#2D2D32"></path>
            </g>
            <defs xmlns="http://www.w3.org/2000/svg">
              <clipPath id="clip0_16363_3845">
                <rect width="24" height="24" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        ),
        link: "/aml-policy",
      },
      {
        header: "Privacy Policy",
        link: "/privacy-policy",
        subHeader:
          "The Privacy Policy governs the information collection, use, processing, storage and disclosure practices of the platform",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 1024 1024"
            fill="none"
          >
            <path
              d="M932.571429 329.142857v475.428572a182.857143 182.857143 0 0 1-182.857143 182.857142h-438.857143a109.750857 109.750857 0 0 1-105.033143-77.897142c10.130286 3.108571 20.845714 4.754286 31.890286 4.754285h475.428571a146.285714 146.285714 0 0 0 146.285714-146.285714V225.645714c42.605714 15.067429 73.142857 55.734857 73.142858 103.497143z"
              fill="#ffc014"
            ></path>
            <path
              d="M713.142857 36.571429a109.714286 109.714286 0 0 1 109.714286 109.714285v621.714286a109.714286 109.714286 0 0 1-109.714286 109.714286h-512a109.714286 109.714286 0 0 1-109.714286-109.714286V310.857143H292.571429a73.142857 73.142857 0 0 0 72.96-67.657143L365.714286 237.714286V36.571429h347.428571z m-109.714286 585.142857h-292.571428a36.571429 36.571429 0 0 0-36.571429 36.571428v7.314286a36.571429 36.571429 0 0 0 36.571429 36.571429h292.571428a36.571429 36.571429 0 0 0 36.571429-36.571429V658.285714a36.571429 36.571429 0 0 0-36.571429-36.571428z m0-182.857143h-292.571428a36.571429 36.571429 0 0 0-36.571429 36.571428v7.314286a36.571429 36.571429 0 0 0 36.571429 36.571429h292.571428a36.571429 36.571429 0 0 0 36.571429-36.571429V475.428571a36.571429 36.571429 0 0 0-36.571429-36.571428z m-292.571428-402.285714v164.571428A54.857143 54.857143 0 0 1 256 256H91.428571l219.428572-219.428571z"
              fill="#474752"
            ></path>
          </svg>
        ),
        link: "/privacy-policy",
      },
    ],
  },
  {
    label: "Our card",
    icon: <CreditCardIcon sx={{ color: "#FFB800" }} />,
    dropdown: [
      {
        header: "Overview",
        link: "/card",
        subHeader: "Learn more about our payment card",
        icon: (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              xmlns="http://www.w3.org/2000/svg"
              cx="12"
              cy="12"
              r="11"
              fill="#474752"
            ></circle>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M10.5335 15.5881V15.6881H10.6335H12.1676H12.2676V15.5881V15.5122C12.2761 14.9895 12.3309 14.5582 12.4299 14.216C12.5284 13.8754 12.6856 13.5841 12.9009 13.3404L12.9015 13.3397C13.1192 13.0891 13.4112 12.8481 13.7799 12.6177C14.1622 12.3831 14.4894 12.1129 14.7607 11.8067C15.0374 11.4991 15.2484 11.1497 15.3933 10.759C15.543 10.3668 15.617 9.93061 15.617 9.4517C15.617 8.77103 15.4598 8.1609 15.1431 7.62415C14.8307 7.08755 14.3864 6.66583 13.8129 6.35933C13.2418 6.05186 12.573 5.9 11.8097 5.9C11.1058 5.9 10.4622 6.03913 9.88064 6.31898L9.88038 6.31911C9.30203 6.59952 8.83452 7.0055 8.4794 7.53599L8.4794 7.53599L8.47908 7.53647C8.12663 8.06955 7.9349 8.70773 7.90011 9.447L7.89518 9.5517H8H9.6108H9.70425L9.71057 9.45847C9.74382 8.96798 9.86587 8.58014 10.0699 8.2881C10.2776 7.9908 10.5344 7.77513 10.8406 7.63816C11.1518 7.49893 11.4745 7.42955 11.8097 7.42955C12.196 7.42955 12.5446 7.50956 12.8575 7.66804C13.1699 7.82624 13.4184 8.05061 13.6047 8.34219C13.789 8.63067 13.883 8.97359 13.883 9.375C13.883 9.69963 13.8255 9.99278 13.7121 10.2559L13.7121 10.2559L13.7116 10.2571C13.6011 10.5231 13.4501 10.7577 13.2585 10.9617C13.0644 11.1639 12.8455 11.3395 12.6016 11.4884C12.1782 11.7433 11.8136 12.0229 11.5088 12.3277C11.1976 12.6389 10.9603 13.0431 10.7944 13.5363C10.6278 14.0319 10.5421 14.6914 10.5335 15.5103V15.5114V15.5881ZM12.0784 19.3045L12.079 19.3041C12.2675 19.1892 12.4176 19.037 12.5283 18.8482C12.6443 18.6576 12.7023 18.4481 12.7023 18.2216C12.7023 17.8793 12.5785 17.5834 12.3342 17.3391C12.0899 17.0948 11.7939 16.971 11.4517 16.971C11.1095 16.971 10.8135 17.0948 10.5692 17.3391C10.3249 17.5834 10.2011 17.8793 10.2011 18.2216C10.2011 18.5638 10.3249 18.8598 10.5692 19.1041C10.8135 19.3484 11.1095 19.4722 11.4517 19.4722C11.6815 19.4722 11.8913 19.4168 12.0784 19.3045Z"
              fill="#ffc014"
              stroke="#ffc014"
              stroke-width="0.2"
            ></path>
          </svg>
        ),
      },
    ],
  },
];

const langList = [
  { label: "Trading", icon: <ShowChartIcon sx={{ color: "#FFB800" }} /> },
];

const Navbar = ({ setappModal }) => {
  const [hidden, sethidden] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [price, setprice] = useState(null);
  const [totalAmt, settotalAmt] = useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEls, setAnchorEls] = React.useState({});
  let navigate = useNavigate();
  const [navDropDown, setnavDropDown] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isMobileHigh = useMediaQuery("(max-width:1600px)");
  const [popup, setpopup] = useState(false);

  const assets = [
    {
      symbol: "BTCUSDT",
      name: "Bitcoin",
      icon: "https://bit-frame.net/assets/img/coins/BTC.png",
      chains: [
        {
          name: "Bitcoin",
          address: "BVTC ChAIN KA ADDY BC",
        },
      ],
    },
    {
      symbol: "ETHUSDT",
      name: "Ethereum",
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
      icon: "https://bit-frame.net/assets/img/coins/USDT.png",
      chains: [
        {
          name: "TRC20",
          address: "TRC20 ChAIN KA ADDY BC",
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
      icon: "https://bit-frame.net/assets/img/coins/SOL.png",
      chains: [
        {
          name: "Solana",
          address: "SOL ChAIN KA ADDY BC",
        },
      ],
    },
    {
      symbol: "USDCBNB",
      name: "USD Coin",
      icon: "https://bit-frame.net/assets/img/coins/USDC.png",
      chains: [
        {
          name: "TRC20",
          address: "TRC20 ChAIN KA ADDY BC",
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
      icon: "https://bit-frame.net/assets/img/coins/XRP.png",
      chains: [
        {
          name: "XRP",
          address: "XRP ChAIN KA ADDY BC",
        },
      ],
    },
    {
      symbol: "DOGEUSDT",
      name: "Dogecoin",
      icon: "https://bit-frame.net/assets/img/coins/DOGE.png",
      chains: [
        {
          name: "Dogecoin",
          address: "DOGE ChAIN KA ADDY BC",
        },
      ],
    },
    {
      symbol: "TONUSDT",
      name: "Toncoin",
      icon: "https://bit-frame.net/assets/img/coins/TON.png",
      chains: [
        {
          name: "Toncoin",
          address: "TON ChAIN KA ADDY BC",
        },
      ],
    },
    {
      symbol: "TRXUSDT",
      name: "TRON",
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
      icon: "https://bit-frame.net/assets/img/coins/WBTC.png",
    },
  ];
  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleMenuOpen = (event, key) => {
    setAnchorEls({ ...anchorEls, [key]: event.currentTarget });
  };

  const handleMenuClose = (key) => {
    setAnchorEls({ ...anchorEls, [key]: null });
  };

  const handleHide = () => {
    if (hidden) {
      sethidden(false);
    } else {
      sethidden(true);
    }
  };

  const loadData = async () => {
    setLoading1(true);
    const coinList = [
      {
        label: "BTC/USDT",
        symbol: "BTCUSDT",
        image: "https://bit-frame.net/assets/img/coins/BTC.png",
      },
      {
        label: "ETH/USDT",
        symbol: "ETHUSDT",
        image: "https://bit-frame.net/assets/img/coins/ETH.png",
      },
      {
        label: "BNB/USDT",
        symbol: "BNBUSDT",
        image: "https://bit-frame.net/assets/img/coins/BNB.png",
      },
      {
        label: "SOL/USDT",
        symbol: "SOLUSDT",
        image: "https://bit-frame.net/assets/img/coins/SOL.png",
      },
      {
        label: "XRP/USDT",
        symbol: "XRPUSDT",
        image: "https://bit-frame.net/assets/img/coins/XRP.png",
      },
      {
        label: "DOGE/USDT",
        symbol: "DOGEUSDT",
        image: "https://bit-frame.net/assets/img/coins/DOGE.png",
      },
      {
        label: "TON/USDT",
        symbol: "TONUSDT",
        image: "https://bit-frame.net/assets/img/coins/TON.png",
      },
      {
        label: "TRX/USDT",
        symbol: "TRXUSDT",
        image: "https://bit-frame.net/assets/img/coins/TRX.png",
      },
      {
        label: "USDC/BNB",
        symbol: "USDCBNB",
        image: "https://bit-frame.net/assets/img/coins/USDC.png",
      },
      {
        label: "ADAUSDT/USDT",
        symbol: "ADAUSDT",
        image: "https://bit-frame.net/assets/img/coins/ADA.png",
      },
      {
        label: "AVAX/USDT",
        symbol: "AVAXUSDT",
        image: "https://bit-frame.net/assets/img/coins/AVAX.png",
      },
      {
        label: "WBTC/USDT",
        symbol: "WBTCUSDT",
        image: "https://bit-frame.net/assets/img/coins/WBTC.png",
      },
    ];

    coinList.map(async (data) => {
      try {
        // Fetch current price + 24h change
        const tickerRes = await fetch(
          `https://api.binance.com/api/v3/ticker/24hr?symbol=${data.symbol}`
        );

        const tickerData = await tickerRes.json();

        const price = parseFloat(tickerData.lastPrice);
        setprice((prev) => ({
          ...prev,
          [data.symbol]: price,
        }));
      } catch (err) {
        console.error("Failed to load data:", err);
      }
    });
    setLoading1(false);
  };

  const getTotalUserBalance = async () => {
    if (!user) return 0;
    if (loading) {
      return;
    }
    try {
      const userDocRef = await getDoc(doc(db, "users", user.uid));
      if (!userDocRef.exists()) return 0;
      const userData = userDocRef.data();
      let total = [];
      const balance = userData.balance;

      Object.entries(balance).forEach(([symbol, data]) => {
        const coin = data.currency;
        const balance = data.amount;
        const amount = balance * price[coin] || 0;
        total.push(amount);
      });
      const totalAmount = total.reduce((acc, curr) => acc + curr, 0);

      settotalAmt(totalAmount);

      return totalAmount;
    } catch (err) {
      console.error("Error calculating total user balance:", err);
      return 0;
    }
  };

  const [numID, setnumID] = useState(0);

  const [anchorEl, setAnchorEl] = useState(null);
  const [loading1, setLoading1] = useState(null);
  const [anchorEltwo, setAnchorEltwo] = useState(null);
  const [anchorElthree, setAnchorElthree] = useState(null);
  const [anchorElfour, setAnchorElfour] = useState(null);
  const [anchorElfive, setAnchorElfive] = useState(null);
  const open = Boolean(anchorEl);
  const opentwo = Boolean(anchorEltwo);
  const openthree = Boolean(anchorElthree);
  const openfour = Boolean(anchorElfour);
  const openfive = Boolean(anchorElfive);
  const [navLinksData, setnavLinksData] = useState({
    1: "lol",
  });

  React.useEffect(() => {
    if (!price) {
      loadData();
    }
    getTotalUserBalance();
    const getUserNumId = async () => {
      const userDocRef = await getDoc(doc(db, "users", user?.uid));
      if (!userDocRef.exists()) return 0;
      console.log(userDocRef);
      setnumID(userDocRef.data().uniquenumid);
    };
    getUserNumId();
  }, [user, price]);

  const renderNavItems = (isDrawer = false) =>
    navItems.map(({ label, icon, dropdown }, i) => {
      const key = `menu-${i}`;
      const isCard = label.toLowerCase().includes("card");

      return isDrawer ? (
        <ListItem button key={key}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={label} />
        </ListItem>
      ) : (
        <Box key={key}>
          <Button
            onClick={(e) => handleMenuOpen(e, key)}
            sx={{
              color: "#fff",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              textTransform: "none",
              fontSize: "14px",
              padding: "10px",
              display: isMobileHigh ? "none" : "flex",
            }}
            startIcon={isCard ? icon : null}
            endIcon={<ExpandMoreIcon />}
          >
            {label}
          </Button>

          <Menu
            anchorEl={anchorEls[key]}
            open={Boolean(anchorEls[key])}
            onClose={() => handleMenuClose(key)}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            PaperProps={{
              sx: {
                mt: 1,
                width: "100%",
                maxWidth: 414,
                bgcolor: "#0c0c0f",
                color: "#fff",
                borderRadius: 2,
                overflow: "visible",
                boxShadow: 6,
              },
            }}
          >
            <Paper
              sx={{
                p: "10px",
                bgcolor: "#0c0c0f",
              }}
              elevation={0}
            >
              <Stack spacing={2} borderRadius={3}>
                {dropdown.map((itm) => (
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    sx={{
                      cursor: "pointer",
                    }}
                    component={"button"}
                    onClick={() => {
                      if (itm.link === "err") {
                        setpopup(true);
                        return;
                      }
                      itm.link && navigate(itm.link);
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#2E2E33",
                        borderRadius: "0.5rem",
                        height: "2.5rem",
                        width: "2.5rem",
                      }}
                    >
                      {itm.icon}
                    </Box>
                    <Stack
                      gap={1}
                      sx={{ width: "80%" }}
                      alignItems={"flex-start"}
                    >
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontFamily: "inter-medium",
                          fontWeight: 500,
                          color: "#fff",
                        }}
                      >
                        {itm.header}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 11,
                          fontFamily: "inter",
                          fontWeight: 400,
                          color: "hsla(0, 0%, 100%, .79)",
                          textAlign: "left",
                        }}
                      >
                        {itm.subHeader}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </Stack>
            </Paper>
          </Menu>
        </Box>
      );
    });

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#0B0B0F",
          px: { xs: 1, sm: 5 },
          py: 1,
          boxShadow: "none",
          zIndex: 10000000,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left: Logo and desktop nav OR menu icon */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box
              component={"a"}
              onClick={() => navigate("/")}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
            >
              <img src={logo} alt="Zellabit" style={{ height: 40 }} />
              <Typography
                variant="h6"
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  letterSpacing: 0.5,
                  fontSize: 22,
                }}
              >
                GlobeFi
              </Typography>
            </Box>

            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {renderNavItems()}
              </Box>
            )}
          </Box>

          {/* Right: buttons always visible */}
          {user ? (
            <>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: isMobile ? 1 : 3,
                }}
              >
                <Button
                  sx={{
                    color: "#000",
                    background: "#F7A600",
                    fontFamily: "inter",
                    fontSize: 12,
                    textTransform: "unset !important",
                    px: "13px",
                    gap: 1,
                    display: isMobile ? "none" : "flex",
                  }}
                  onClick={() =>
                    (window.location.href = "/profile/wallet?modal=deposit")
                  }
                >
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    class="top-up-icon"
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M15.75 5.75L7.75 13.75M7.75 13.75V7.75M7.75 13.75H13.75M4.75 19.25H19.25"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  Deposit
                </Button>
                <Typography
                  sx={{
                    ml: 1,
                    color: "#fff",
                    fontFamily: "inter-bold, sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                  component="button"
                  onClick={(e) => setAnchorEl(e.currentTarget)}
                >
                  Assets
                  <ExpandMoreIcon
                    sx={{
                      fontSize: 18,
                      marginBottom: "-3px",
                      ml: 0.5,
                      transition: "all ease 0.3s",
                      rotate: anchorEl ? "180deg" : "0deg",
                    }}
                  />
                </Typography>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                  PaperProps={{
                    sx: {
                      mt: 1,
                      width: "100%",
                      maxWidth: 300,
                      bgcolor: "#0c0c0f",
                      color: "#fff",
                      borderRadius: 2,
                      overflow: "visible",
                      boxShadow: 6,
                      right: 0,
                      left: "auto !important",
                    },
                  }}
                >
                  <Paper
                    sx={{
                      p: 2,
                      bgcolor: "#0c0c0f",
                    }}
                    elevation={0}
                  >
                    <Typography
                      variant="subtitle2"
                      sx={{
                        fontSize: 14,
                        color: "#adb1b8",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Assets Overview
                      <Button onClick={handleHide}>
                        {hidden ? (
                          <img
                            class="assets-hide-show"
                            src="https://bit-frame.net/assets/img/hide.svg"
                            alt="hide"
                            style={{ cursor: "pointer" }}
                          ></img>
                        ) : (
                          <img
                            class="assets-hide-show"
                            src="https://bit-frame.net/assets/img/show.svg"
                            alt="hide"
                            style={{ cursor: "pointer" }}
                          ></img>
                        )}
                      </Button>
                    </Typography>
                    {hidden ? (
                      <>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "white",
                            mt: 2,
                            fontSize: 24,
                            fontWeight: 400,
                          }}
                        >
                          **** USD
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#adb1b8",
                            fontSize: 16,
                            fontWeight: 400,
                          }}
                        >
                          = **** BTC
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "white",
                            mt: 2,
                            fontSize: 24,
                            fontWeight: 400,
                          }}
                        >
                          {totalAmt ? totalAmt.toFixed(2) : 0.0} USD
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#adb1b8",
                            fontSize: 16,
                            fontWeight: 400,
                          }}
                        >
                          = {totalAmt / (price && price["BTCUSDT"]) || 0} BTC
                        </Typography>
                      </>
                    )}

                    <Typography
                      sx={{
                        mt: "12px",
                        mb: "16px",
                        color: "#61676b",
                        fontSize: 12,
                        fontWeight: 400,
                      }}
                    >
                      *Data may be delayed.
                    </Typography>

                    <Box
                      display="flex"
                      gap={1}
                      mt={2}
                      justifyContent={"space-between"}
                    >
                      <Button
                        onClick={() => {
                          window.location.href =
                            "/profile/wallet?modal=deposit";
                        }}
                        variant="outlined"
                        sx={{
                          fontWeight: 400,
                          borderRadius: 2,
                          fontSize: 14,
                          color: "white",
                          borderColor: "#404347",
                          textTransform: "unset",
                          height: 43,
                          width: 120,
                          gap: 1,
                        }}
                      >
                        <img
                          src="https://bit-frame.net/assets/img/deposit.svg"
                          alt="deposit"
                        />
                        Deposit
                      </Button>
                      <Button
                        onClick={() => {
                          window.location.href =
                            "/profile/wallet?modal=withdrawl";
                        }}
                        variant="outlined"
                        sx={{
                          fontWeight: 400,
                          borderRadius: 2,
                          fontSize: 14,
                          color: "white",
                          borderColor: "#404347",
                          textTransform: "unset",
                          height: 43,
                          width: 120,
                          gap: 1,
                        }}
                      >
                        <img
                          src="https://bit-frame.net/assets/img/withdraw.svg"
                          alt="withdraw"
                        />
                        Withdraw
                      </Button>
                    </Box>

                    <Divider sx={{ my: 2, borderColor: "gray" }} />

                    {[
                      { label: "Spot", value: "$0.00" },
                      { label: "Margin", value: "$0.00" },
                      { label: "Futures", value: "$0.00" },
                      { label: "Earn", value: "$0.00" },
                    ].map((item) => (
                      <Box
                        key={item.label}
                        display="flex"
                        justifyContent="space-between"
                        alignItems={"center"}
                        sx={{ p: "16px 0" }}
                      >
                        <Stack>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#e6e6e6 !important",
                              fontFamily: "Roboto",
                              fontSize: 14,
                              fontWeight: 400,
                            }}
                          >
                            {item.label}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#8c8c93 !important",
                              fontFamily: "Roboto",
                              fontSize: 14,
                              fontWeight: 400,
                            }}
                          >
                            0.0%
                          </Typography>
                        </Stack>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#e6e6e6 !important",
                            fontSize: 16,
                            fontWeight: 400,
                          }}
                        >
                          {item.value}
                        </Typography>
                      </Box>
                    ))}
                  </Paper>
                </Menu>
                <Typography
                  sx={{
                    ml: 1,
                    color: "#fff",
                    fontFamily: "inter-bold, sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                  }}
                  component="button"
                  onClick={(e) => setAnchorEltwo(e.currentTarget)}
                >
                  History{" "}
                  <ExpandMoreIcon
                    sx={{
                      fontSize: 18,
                      marginBottom: "-3px",
                      ml: 0.5,
                      transition: "all ease 0.3s",
                      rotate: anchorEltwo ? "180deg" : "0deg",
                    }}
                  />
                </Typography>
                <Menu
                  anchorEl={anchorEltwo}
                  open={opentwo}
                  onClose={() => setAnchorEltwo(null)}
                  PaperProps={{
                    sx: {
                      mt: 3,
                      width: "100%",
                      maxWidth: 300,
                      bgcolor: "#0c0c0f",
                      color: "#fff",
                      borderRadius: 2,
                      overflow: "visible",
                      boxShadow: 6,
                      right: 0,
                      left: "auto !important",
                    },
                  }}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  {[
                    "All transactions",
                    "Deposits",
                    "Withdrawals",
                    "Transfers",
                    "Earnings",
                  ].map((label) => (
                    <MenuItem
                      key={label}
                      onClick={() => {
                        navigate("/profile/history");
                        setAnchorEltwo(null);
                      }}
                      sx={{
                        "&:hover": {
                          bgcolor: "#1a1a1a",
                        },
                        p: "16px",
                      }}
                    >
                      <ListItemText
                        sx={{
                          fontSize: 16,
                          fontWeight: 400,
                          fontFamily: "Roboto",
                          color: "#e6e6e6 !important",
                        }}
                      >
                        {label}
                      </ListItemText>
                      <ListItemIcon>
                        <ChevronRightIcon
                          fontSize="small"
                          sx={{ color: "gray", marginRight: "-20px" }}
                        />
                      </ListItemIcon>
                    </MenuItem>
                  ))}
                </Menu>
                <Avatar
                  src="https://bit-frame.net/assets/img/avatar.svg"
                  alt="User Avatar"
                  component={"button"}
                  onClick={(e) => setAnchorElthree(e.currentTarget)}
                />
                <Menu
                  anchorEl={anchorElthree}
                  open={openthree}
                  onClose={() => setAnchorElthree(null)}
                  PaperProps={{
                    sx: {
                      mt: 3,
                      width: "100%",
                      maxWidth: 300,
                      bgcolor: "#0c0c0f",
                      color: "#fff",
                      borderRadius: 2,
                      overflow: "scroll",
                      boxShadow: 6,
                      right: 0,
                      left: "auto !important",
                    },
                  }}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  {/* User Info */}
                  <Box p={"15px"} m={"10px"}>
                    <Stack direction={"row"} spacing={1}>
                      <Avatar
                        src="https://bit-frame.net/assets/img/avatar.svg"
                        logo="lol"
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: "50%",
                          height: "100%",
                        }}
                      />
                      <Stack
                        justifyContent={"center"}
                        sx={{
                          height: "100%",
                          marginTop: "-5px !important",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Roboto",
                            fontSize: 20,
                            fontWeight: 700,
                          }}
                        >
                          {user?.email.slice(0, 3)}***@****
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Roboto",
                            fontSize: 12,
                            fontWeight: 400,
                            width: "90px",
                            background: "#434348",
                            color: "white",
                            borderRadius: "2px",
                          }}
                        >
                          UID {numID}
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack direction={"row"} sx={{ mt: 2, gap: 1.5 }}>
                      <Button
                        sx={{
                          width: 100,
                          height: 35,
                          color: "#eb0a33",
                          background: "rgba(235, 10, 51, .06)",
                        }}
                      >
                        VIP
                      </Button>
                      <Button
                        sx={{
                          width: 100,
                          height: 35,
                          color: "#ff8018",
                          background: "#30261e",
                          textTransform: "unset",
                        }}
                      >
                        Unverified
                      </Button>
                    </Stack>
                  </Box>

                  <Divider sx={{ borderColor: "gray" }} />

                  {/* Menu Items */}
                  {[
                    { label: "Wallet", link: "/profile/wallet" },
                    { label: "Settings", link: "/profile/settings" },
                    { label: "Security", link: "/profile/settings" },
                    {
                      label: "Identity Verification",
                      link: "/profile/verification",
                    },
                    { label: "Promo codes", link: "/profile/promo" },
                    { label: "Referral program", link: "/referral-program" },
                    // { label: "API Management", link: "/profile/wallet" },
                    { label: "Mobile app", link: "modal" },
                  ].map((item) => (
                    <MenuItem
                      key={item.label}
                      onClick={() => {
                        if (item.link === "modal") {
                          setappModal(true);
                          setAnchorElthree(null);
                        } else {
                          window.location.href = item.link;
                          setAnchorElthree(null);
                        }
                      }}
                      sx={{
                        "&:hover": { bgcolor: "#1a1a1a" },
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "5px",
                        padding: "12px",
                        fontWeight: 400,
                        fontFamily: "Roboto",
                        fontSize: 16,
                      }}
                    >
                      {item.label}
                      <ChevronRightIcon
                        fontSize="small"
                        sx={{ color: "gray" }}
                      />
                    </MenuItem>
                  ))}

                  <Divider sx={{ borderColor: "gray" }} />

                  {/* Logout */}
                  <MenuItem
                    onClick={() => setAnchorElthree(null)}
                    sx={{
                      color: "white",
                      justifyContent: "center",
                      "&:hover": { bgcolor: "#1a1a1a" },
                    }}
                  >
                    <Typography
                      onClick={signOutUser}
                      variant="body2"
                      ml={1}
                      sx={{ fontSize: 16 }}
                    >
                      Log out
                    </Typography>
                  </MenuItem>
                </Menu>

                <Typography
                  component={"button"}
                  onClick={(e) => setAnchorElfive(e.currentTarget)}
                  sx={{
                    ml: 1,
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                  }}
                >
                  EN
                </Typography>
                <Menu
                  anchorEl={anchorElfive}
                  open={openfive}
                  onClose={() => setAnchorElfive(null)}
                  PaperProps={{
                    sx: {
                      mt: 3,
                      width: "100%",
                      maxWidth: 300,
                      bgcolor: "#0c0c0f",
                      color: "#fff",
                      borderRadius: 2,
                      overflow: "visible",
                      boxShadow: 6,
                      right: 0,
                      left: "auto !important",
                    },
                  }}
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  {[
                    "English ",
                    "Türkçe",
                    "Deutsch",
                    "Español",
                    "Italiano",
                    " Français",
                    "Portuguese",
                    "繁體中文",
                    "日本語",
                  ].map((label) => (
                    <MenuItem
                      key={label}
                      sx={{
                        "&:hover": {
                          bgcolor: "#1a1a1a",
                        },
                        p: "10px",
                      }}
                    >
                      <Box
                        component={"div"}
                        justifyContent={"center"}
                        display={"flex"}
                        alignContent={"center"}
                        sx={{
                          height: "14px",
                          width: "24px",
                          fontFamily: "inter-medium",
                          background: "white",
                          color: "black",
                          fontSize: "10px",
                          borderRadius: "2px",
                        }}
                      >
                        {label.slice(0, 2)}
                      </Box>
                      <ListItemText
                        sx={{
                          margin: "3px",
                          fontSize: "14px",
                          fontWeight: 400,
                          fontFamily: "inter-medium",
                          color: "#e6e6e6 !important",
                        }}
                      >
                        {label}
                      </ListItemText>
                    </MenuItem>
                  ))}
                </Menu>
                {user && (
                  <IconButton
                    onClick={(e) => setAnchorElfour(e.currentTarget)}
                    sx={{ color: "#fff" }}
                  >
                    {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                )}
                <Menu
                  anchorEl={anchorElfour}
                  open={openfour}
                  onClose={() => setAnchorElfour(null)}
                  PaperProps={{
                    sx: {
                      mt: 3,
                      width: "100%",
                      maxWidth: 300,
                      bgcolor: "#0c0c0f",
                      color: "#fff",
                      borderRadius: 2,
                      overflow: "visible",
                      boxShadow: 6,
                      right: 0,
                      left: "auto !important",
                    },
                  }}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  {navItems.map((data, index) => {
                    return (
                      <List
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          flexDirection: "column",
                          gap: 2,
                          width: "100%",
                        }}
                      >
                        <ListItemButton
                          onClick={() =>
                            navDropDown === index
                              ? setnavDropDown(null)
                              : setnavDropDown(index)
                          }
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: 16,
                              fontFamily: "inter",
                              color: "#fff",
                              fontWeight: 400,
                              display: "flex",
                              justifyContent: "center",
                              gap: 1,
                            }}
                          >
                            {data?.dropdown[0]?.icon} {data.label}
                          </Typography>
                          {navDropDown === index ? (
                            <ExpandLess sx={{ color: "#fff" }} />
                          ) : (
                            <ExpandMore sx={{ color: "#fff" }} />
                          )}
                        </ListItemButton>
                        <Collapse
                          in={navDropDown === index}
                          timeout="auto"
                          unmountOnExit
                          sx={{ width: "100%" }}
                        >
                          <List component="div" disablePadding>
                            {data.dropdown.map((link) => (
                              <ListItemButton
                                component={"button"}
                                // onClick={() => link.link && navigate(link.link)}
                                onClick={() => {
                                  if (link.link === "err") {
                                    setpopup(true);
                                    return;
                                  } else {
                                    link.link && navigate(link.link);
                                  }
                                }}
                              >
                                <Typography
                                  variant="p"
                                  sx={{
                                    fontSize: 14,
                                    color: "#f8fafc",
                                    fontFamily: '"inter", sans-serif',
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    "&:hover": {
                                      color: "#F79F1A",
                                    },
                                    p: 1,
                                  }}
                                >
                                  {link.header}
                                </Typography>
                              </ListItemButton>
                            ))}
                          </List>
                        </Collapse>
                      </List>
                    );
                  })}
                </Menu>
              </Box>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                size="small"
                onClick={() => (window.location.href = "/login")}
                variant="outlined"
                sx={{
                  color: "#fff",
                  borderColor: "#333",
                  fontFamily: "Inter, sans-serif",
                  p: 0.6,
                  fontWeight: 700,
                  textTransform: "none",
                  "&:hover": { borderColor: "#444" },
                }}
              >
                Log In
              </Button>
              <Button
                variant="contained"
                onClick={() => (window.location.href = "/register")}
                size="small"
                sx={{
                  backgroundColor: "#FFB800",
                  color: "#000",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  textTransform: "none",
                  p: 0.6,
                  // borderRadius: "6px",
                  "&:hover": { backgroundColor: "#e6a000" },
                }}
              >
                Sign Up
              </Button>
              <Typography
                sx={{
                  ml: 1,
                  color: "#fff",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                }}
              >
                EN
              </Typography>
              {isMobileHigh && (
                <IconButton
                  onClick={(e) => setAnchorElfour(e.currentTarget)}
                  sx={{ color: "#fff" }}
                >
                  {drawerOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              )}

              <Menu
                anchorEl={anchorElfour}
                open={openfour}
                onClose={() => setAnchorElfour(null)}
                PaperProps={{
                  sx: {
                    mt: 3,
                    width: "100%",
                    maxWidth: 300,
                    bgcolor: "#0c0c0f",
                    color: "#fff",
                    borderRadius: 2,
                    overflow: "visible",
                    boxShadow: 6,
                    right: 0,
                    left: "auto !important",
                  },
                }}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              >
                {navItems.map((data, index) => {
                  return (
                    <List
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: 2,
                        width: "100%",
                      }}
                    >
                      <ListItemButton
                        onClick={() =>
                          navDropDown === index
                            ? setnavDropDown(null)
                            : setnavDropDown(index)
                        }
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: 16,
                            fontFamily: "inter",
                            color: "#fff",
                            fontWeight: 400,
                            display: "flex",
                            justifyContent: "center",
                            gap: 1,
                          }}
                        >
                          {data?.dropdown[0]?.icon} {data.label}
                        </Typography>
                        {navDropDown === index ? (
                          <ExpandLess sx={{ color: "#fff" }} />
                        ) : (
                          <ExpandMore sx={{ color: "#fff" }} />
                        )}
                      </ListItemButton>
                      <Collapse
                        in={navDropDown === index}
                        timeout="auto"
                        unmountOnExit
                        sx={{ width: "100%" }}
                      >
                        <List component="div" disablePadding>
                          {data.dropdown.map((link) => (
                            <ListItemButton onClick={() => console.log("hi")}>
                              <Typography
                                variant="p"
                                sx={{
                                  fontSize: 14,
                                  color: "#f8fafc",
                                  fontFamily: '"inter", sans-serif',
                                  fontWeight: "bold",
                                  cursor: "pointer",
                                  "&:hover": {
                                    color: "#F79F1A",
                                  },
                                  p: 1,
                                }}
                              >
                                {link.header}
                              </Typography>
                            </ListItemButton>
                          ))}
                        </List>
                      </Collapse>
                    </List>
                  );
                })}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <div
        id="custom-popup"
        role="dialog"
        aria-modal="true"
        className="custom-popup v-dialog__content v-dialog__content--active"
        style={{
          zIndex: 999999999999,
          // showed is not a valid style, so omit it
          display: popup ? "flex" : "none",
        }}
      >
        <div
          tabIndex={0}
          className="discard-modal v-dialog dialog v-dialog--active"
          style={{
            transformOrigin: "center center",
            width: "500px",
            paddingTop: "25px",
            textAlign: "center",
          }}
        >
          <div className="dialog__close" onClick={() => setpopup(false)}>
            <i
              aria-hidden="true"
              className="v-icon notranslate dialog__close__icon mdi mdi-close theme--light"
            ></i>
          </div>
          <div className="popup-img-wrapper popup-error">
            <img
              src="https://bit-frame.net/assets/img/error-cross.svg"
              width="40px"
              height="40px"
              style={{ color: "white" }}
              alt="error"
            />
          </div>
          <div className="discard-modal__title">Error Occurred</div>
          <div className="discard-modal__text">
            You don't have full access to our exchange service yet.
            <br /> To unlock all features and functionality, you need to get
            <br />
            <strong>Lv.2 Verification</strong>. This will only take a few
            minutes and is required for security and compliance reasons. To
            begin the verification process, go to the{" "}
            <a className="?violethrefintext?" href="?../profile/verification?">
              Verification page
            </a>{" "}
            and follow the required steps.
          </div>
          <button
            type="button"
            onClick={() => window.location.replace("../profile/verification")}
            className="discard-modal__verification-btn v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default"
            style={{ width: "100%" }}
          >
            <span className="v-btn__content">Verification</span>
          </button>
        </div>
      </div>

      {/* Drawer for mobile nav links only */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "#0B0B0F",
            height: "100%",
            color: "white",
            pt: 2,
          }}
          role="presentation"
          onClick={toggleDrawer}
        >
          <List>{renderNavItems(true)}</List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
