import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Menu as MenuIcon, Logout as LogoutIcon } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isLogin = localStorage.getItem("userId");
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      localStorage.clear();
      toast.success("Logged out successfully.");
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      toast.error("Error in logging out, please try again later.");
      console.log(error);
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AppBar position="sticky" style={{ backgroundColor: "#172D13" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="logo" sx={{ flexGrow: 1 }}>
            Blog App
          </Typography>
          {isLogin && (
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Tab label="All Blogs" component={Link} to="/All-blogs" />
              <Tab label="My Blogs" component={Link} to="/my-blogs" />
              <Tab label="Create Blog" component={Link} to="/create-blog" />
            </Tabs>
          )}
          {isLogin ? (
            <Button onClick={handleLogout} color="inherit">
              <LogoutIcon />
            </Button>
          ):""}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {/* <ListItem
            button
            onClick={toggleDrawer}
            component={Link}
            to="/All-blogs"
          >
            <ListItemText primary="All Blogs" />
          </ListItem>

          <ListItem
            button
            onClick={toggleDrawer}
            component={Link}
            to="/my-blogs"
          >
            <ListItemText primary="My Blogs" />
          </ListItem>
          
          <ListItem
            button
            onClick={toggleDrawer}
            component={Link}
            to="/create-blog"
          >
            <ListItemText primary="Create Blog" />
          </ListItem> */}
          {!isLogin ? (
            <>
              <ListItem
                button
                onClick={toggleDrawer}
                component={Link}
                to="/login"
              >
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem
                button
                onClick={toggleDrawer}
                component={Link}
                to="/register"
              >
                <ListItemText primary="Register" />
              </ListItem>
            </>
          ) : (
            <ListItem button onClick={handleLogout}>
              <LogoutIcon />
              <ListItemText primary="Logout" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
