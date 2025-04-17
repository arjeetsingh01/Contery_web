import React from "react";
import { CircularProgress, Box } from "@mui/material";

export const Loadear = () => {
  return (
    <Box
      className="flex justify-center items-center h-screen bg-[#1e1e1e] px-4 sm:px-6 md:px-10"
    >
      <CircularProgress
        size={40}
        thickness={5}
        sx={{
          color: "#3b82f6",
        }}
        className="sm:!w-[50px] sm:!h-[50px] md:!w-[60px] md:!h-[60px]"
      />
    </Box>
  );
};
