import React from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Phone } from "@mui/icons-material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      className="bg-gray-900 text-white px-6 py-10 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0"
    >
      {/* Left Section: Contact Info */}
      <Box className="flex flex-col items-start">
        <Typography variant="h6" className="mb-2 text-lg md:text-xl">
          Country Information Hub
        </Typography>
        <Typography variant="body2" className="mb-2 text-sm md:text-base">
          Providing insights and details about countries worldwide.
        </Typography>

        {/* Contact Number */}
        <Box className="flex items-center gap-2 mt-2">
          <Phone fontSize="small" />
          <Typography variant="body1" className="text-sm md:text-base">
            +123 456 7890
          </Typography>
        </Box>
      </Box>

      {/* Divider for Small Screens */}
      <Divider className="w-full my-4 md:hidden" sx={{ backgroundColor: "white" }} />

      {/* Right Section: Social Media */}
      <Box className="flex justify-start md:justify-center gap-4">
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
