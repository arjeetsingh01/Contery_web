import React from "react";
import { CircularProgress, Box } from "@mui/material";

export const Loadear = () => {
  return (
    <Box
      className="flex justify-center items-center h-screen"
      sx={{ backgroundColor: "#1e1e1e" }} // Dark background
    >
      <CircularProgress size={60} thickness={5} sx={{ color: "#3b82f6" }} />
    </Box>
  );
};
