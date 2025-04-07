import React from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Phone } from "@mui/icons-material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      className="bg-gray-900 text-white py-6 mt-8 px-6"
      sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}
    >
      {/* Left Section: Contact Info */}
      <Box className="flex flex-col items-start">
        <Typography variant="h6" className="mb-2">
          Country Information Hub
        </Typography>
        <Typography variant="body2" className="mb-2">
          Providing insights and details about countries worldwide.
        </Typography>

        {/* Contact Number */}
        <Box className="flex items-center gap-2">
          <Phone />
          <Typography variant="body1">+123 456 7890</Typography>
        </Box>
      </Box>

      {/* Divider for Small Screens */}
      <Divider className="w-full my-4 sm:hidden" sx={{ backgroundColor: "white" }} />

      {/* Right Section: Social Media */}
      <Box className="flex justify-center gap-4">
        <IconButton href="https://facebook.com" target="_blank" sx={{ color: "white" }}>
          <Facebook />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank" sx={{ color: "white" }}>
          <Instagram />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "white" }}>
          <LinkedIn />
        </IconButton>
      </Box>
    </Box>
  );
};
