import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";

const list = [
  {
    header: "Trading",
    links: [
      "Markets",
      "Swap",
      "Spot",
      "Margin",
      "Futures",
      "Tournament",
      "P2P",
      "Buy Crypto",
    ],
  },
  {
    header: "Support",
    links: [
      "About Us",
      "Verify Official Channels",
      "Fees",
      "Bug Bounty",
      "Corporate Identity",
      "Institutional Services",
    ],
  },
  {
    header: "Products",
    links: ["Staking", "Crypto Lending", "Referral Program", "Token Listing"],
  },
  {
    header: "Legal & Disclosures",
    links: [
      "User Agreement",
      "AML Policy",
      "Privacy Policy",
      "Cookies Policy",
      "Risk Disclosure Statement",
      "Special Treatment",
      "Regulatory License",
      "Law Enforcement Requests",
    ],
  },
];

const Footer = ({ seamless }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  let navigate = useNavigate();

  return (
    <Stack
      alignItems="center"
      sx={{ mt: !seamless && "100px", background: "#08080C" }}
    >
      <Stack
        sx={{ width: "95%", maxWidth: 1200, py: "50px" }}
        direction={isMobile ? "column" : "row"}
        justifyContent={"space-between"}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "center",
            mb: isMobile ? "50px" : 0,
          }}
        >
          <img src={logo} alt="Zellabit" style={{ height: 42 }} />
          <Typography
            variant="h6"
            sx={{
              display: "block",
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              letterSpacing: 0.5,
              fontSize: 26,
              color: "#fff",
            }}
          >
            GlobeFi
          </Typography>
        </Box>
        {list.map((data) => {
          if (isMobile) {
            const [open, setopen] = useState(false);

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
                  onClick={() => (open ? setopen(false) : setopen(true))}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{ fontSize: 18, color: "#F79F1A", fontWeight: "bold" }}
                  >
                    {data.header}
                  </Typography>
                  {open ? (
                    <ExpandLess sx={{ color: "#fff" }} />
                  ) : (
                    <ExpandMore sx={{ color: "#fff" }} />
                  )}
                </ListItemButton>
                <Collapse
                  in={open}
                  timeout="auto"
                  unmountOnExit
                  sx={{ width: "100%" }}
                >
                  <List component="div" disablePadding>
                    {data.links.map((link) => (
                      <ListItemButton
                        onClick={() =>
                          navigate(
                            "/" + link.toLowerCase().replace(/\s+/g, "-")
                          )
                        }
                      >
                        <Typography
                          variant="p"
                          sx={{
                            fontSize: 13,
                            color: "#f8fafc",
                            fontFamily: '"Roboto", sans-serif',
                            cursor: "pointer",
                            "&:hover": {
                              color: "#F79F1A",
                            },
                          }}
                        >
                          {link}
                        </Typography>
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </List>
            );
          } else {
            return (
              <Stack spacing={2}>
                <Typography
                  sx={{ fontSize: 18, color: "#F79F1A", fontWeight: "bold" }}
                >
                  {data.header}
                </Typography>

                {data.links.map((link) => (
                  <Stack
                    gap={1}
                    alignItems={"flex-start"}
                    component={"button"}
                    onClick={() =>
                      navigate("/" + link.toLowerCase().replace(/\s+/g, "-"))
                    }
                  >
                    <Typography
                      variant="p"
                      sx={{
                        fontSize: 13,
                        color: "#f8fafc",
                        fontFamily: '"Roboto", sans-serif',
                        cursor: "pointer",
                        "&:hover": {
                          color: "#F79F1A",
                        },
                      }}
                    >
                      {link}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            );
          }
        })}
      </Stack>
    </Stack>
  );
};

export default Footer;
