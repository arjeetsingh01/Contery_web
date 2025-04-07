import React from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export const Header = () => {
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
        {/* Logo (Centered using Box) */}
        <Box className="flex-1 flex ml-20">
          <NavLink to="/" className="text-white no-underline">
            <Typography variant="h5" className="font-bold text-white">
              WorldAtlas
            </Typography>
          </NavLink>
        </Box>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-4 text-white">
            <li>
              <NavLink to="/" className="no-underline">
                <Button
                  color="inherit"
                  sx={{
                    color: "white",
                    "&:hover": { backgroundColor: "#1e3a8a", color: "white" },
                  }}
                >
                  Home
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="no-underline">
                <Button
                  color="inherit"
                  sx={{
                    color: "white",
                    "&:hover": { backgroundColor: "#dc2626", color: "white" },
                  }}
                >
                  About
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/country" className="no-underline">
                <Button
                  color="inherit"
                  sx={{
                    color: "white",
                    "&:hover": { backgroundColor: "#059669", color: "white" },
                  }}
                >
                  Country
                </Button>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="no-underline">
                <Button
                  color="inherit"
                  sx={{
                    color: "white",
                    "&:hover": { backgroundColor: "#f59e0b", color: "white" },
                  }}
                >
                  Contact
                </Button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
};
