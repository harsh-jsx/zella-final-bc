import {
  Button,
  Drawer,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import PortraitIcon from "@mui/icons-material/Portrait";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DiscountIcon from "@mui/icons-material/Discount";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import SecurityIcon from "@mui/icons-material/Security";

const sideList = [
  {
    label: "Account Settings",
    icon: <PortraitIcon sx={{ color: "#FFB800", fontSize: 20 }} />,
    link: "/profile/settings",
  },
  {
    label: "Security",
    icon: <SecurityIcon sx={{ color: "#FFB800", fontSize: 20 }} />,
    link: "/profile/security",
  },
  {
    label: "Identity Verification",
    icon: <DomainVerificationIcon sx={{ color: "#FFB800", fontSize: 20 }} />,
    link: "/profile/verification",
  },
  {
    label: "Referral",
    icon: <GroupAddIcon sx={{ color: "#FFB800", fontSize: 20 }} />,
    link: "/referral-program",
  },
  {
    label: "Promo",
    icon: <DiscountIcon sx={{ color: "#FFB800", fontSize: 20 }} />,
    link: "/profile/promo",
  },
];

const Sidebar = () => {
  const [isOpen, setisOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return (
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ py: 2, width: "100%" }}
      >
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
                Sections
              </Typography>
              <IconButton onClick={() => setisOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Stack>
            {sideList.map((option) => (
              <Stack
                key={option.label}
                direction="row"
                alignItems="center"
                spacing={2}
                sx={{ py: 2, borderBottom: "1px solid #eee" }}
              >
                {option.icon}
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Roboto",
                    fontSize: 18,
                  }}
                >
                  {option.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Drawer>
        <Button
          variant="outlined"
          sx={{ borderRadius: 50, mt: 2 }}
          onClick={() => setisOpen(true)}
        >
          Other Sections
        </Button>
      </Stack>
    );
  } else {
    return (
      <Stack
        direction={"column"}
        sx={{
          width: "13%",
          borderRight: "1px solid rgba(0, 0, 0, 0.2)",
          pl: 2,
          mt: 2,
        }}
        spacing={2}
      >
        {sideList.map((option) => (
          <Button
            sx={{ color: "black" }}
            onClick={() => {
              window.location.href = option.link;
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              sx={{ width: "100%" }}
              spacing={1}
            >
              {option.icon}

              <Typography
                sx={{ fontWeight: "bold", fontFamily: "Roboto", fontSize: 14 }}
              >
                {option.label}
              </Typography>
            </Stack>
          </Button>
        ))}
      </Stack>
    );
  }
};

export default Sidebar;
