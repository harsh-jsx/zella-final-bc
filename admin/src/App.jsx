import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/Home";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SingleTrade from "./pages/SingleTrade";
import SingleUser from "./pages/SingleUser";
import AllUsers from "./pages/AllUsers";
import AllTrades from "./pages/AllTrades";
import { Button, Stack, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { addDoc, doc, getDoc } from "firebase/firestore";
import Deposits from "./pages/Deposits";
import Withdrawl from "./pages/Withdrawl";
import { useAuthState } from "react-firebase-hooks/auth";

const drawerOptions = [
  {
    label: "Dashboard",
    link: "/",
    icon: <SpaceDashboardIcon />,
  },
  {
    label: "All Users",
    link: "/users",
    icon: <SpaceDashboardIcon />,
  },
  {
    label: "All Trades",
    link: "/trades",
    icon: <SpaceDashboardIcon />,
  },
  {
    label: "Deposits",
    link: "/deposits",
    icon: <SpaceDashboardIcon />,
  },
  {
    label: "Withdrawl",
    link: "/withdrawl",
    icon: <SpaceDashboardIcon />,
  },
];

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const App = () => {
  const theme = useTheme();
  const [user] = useAuthState(auth);

  const [open, setOpen] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  const [error, seterror] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const userDocSnap = await getDoc(doc(db, "users", response.user.uid));

      if (userDocSnap.data().isAdmin) {
        setisAdmin(true);
      } else {
        seterror("you're not a admin");
      }
    } catch (error) {
      console.log(error);
      seterror(error);
    }
  };

  if (isAdmin) {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  mr: 2,
                },
                open && { display: "none" },
              ]}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              GlobeFi Admin
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {drawerOptions.map((data, index) => {
              // let navigate = useNavigate();

              return (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => navigate(data.link)}>
                    <ListItemIcon>{data.icon}</ListItemIcon>
                    <ListItemText primary={data.label} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
        <Main open={open} sx={{ position: "relative" }}>
          <DrawerHeader />
          <Routes>
            <Route path="/" element={<Home open={open} />} />
            <Route
              path="/trade/:id/:traderId/:symbol/"
              element={<SingleTrade />}
            />
            <Route path="/user/:id" element={<SingleUser />} />
            <Route path="/users" element={<AllUsers />} />
            <Route path="/trades" element={<AllTrades />} />
            <Route path="/deposits" element={<Deposits />} />
            <Route path="/withdrawl" element={<Withdrawl />} />
          </Routes>
        </Main>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Stack
          spacing={4}
          component="form"
          onSubmit={handleSubmit}
          sx={{ width: 400, boxShadow: 2, padding: 4, borderRadius: 2 }}
        >
          <Typography>Login</Typography>
          <TextField
            placeholder="admin"
            label="Email"
            required
            fullWidth
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <TextField
            placeholder="admin"
            label="password"
            required
            error={error}
            helperText={error}
            fullWidth
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </Box>
    );
  }
};

export default App;
