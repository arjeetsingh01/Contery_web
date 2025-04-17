import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navItems = [
    { label: "Home", to: "/", hoverBg: "#1e3a8a" },
    { label: "About", to: "/about", hoverBg: "#dc2626" },
    { label: "Country", to: "/country", hoverBg: "#059669" },
    { label: "Contact", to: "/contact", hoverBg: "#f59e0b" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#202020",
        boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
      }}
      className="shadow-lg"
    >
      <Toolbar className="flex justify-between items-center">
        {/* Logo */}
        <Box className="flex-1 ml-4 sm:ml-20">
          <NavLink to="/" className="text-white no-underline">
            <Typography variant="h5" className="font-bold text-white">
              WorldAtlas
            </Typography>
          </NavLink>
        </Box>

        {/* Desktop Nav */}
        <Box className="hidden md:flex gap-4 mr-8">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className="no-underline">
              <Button
                color="inherit"
                sx={{
                  color: "white",
                  "&:hover": { backgroundColor: item.hoverBg, color: "white" },
                }}
              >
                {item.label}
              </Button>
            </NavLink>
          ))}
        </Box>

        {/* Mobile Menu Icon */}
        <Box className="md:hidden mr-4">
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {navItems.map((item) => (
              <MenuItem key={item.to} onClick={handleClose}>
                <NavLink to={item.to} className="w-full text-black no-underline">
                  {item.label}
                </NavLink>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
