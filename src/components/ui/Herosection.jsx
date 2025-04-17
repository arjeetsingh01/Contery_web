import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Explore } from "@mui/icons-material";

export const Herosection = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 py-10 sm:py-16 bg-black">
      {/* Left Section: Text Content */}
      <Box className="max-w-xl text-center md:text-left">
        <Typography
          variant="h3"
          className="font-bold text-white mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl leading-snug"
        >
          Explore the World, One Country at a Time
        </Typography>
        <Typography
          variant="body1"
          className="text-gray-300 mb-6 text-base sm:text-lg"
        >
          Discover the history, culture, and beauty of every nation. Sort, search, 
          and filter through countries to find the details you need.
        </Typography>

        {/* Button with Explore Icon */}
        <Button
          variant="contained"
          color="primary"
          startIcon={<Explore />}
          sx={{
            backgroundColor: "#1e3a8a",
            padding: "8px 14px",
            marginTop: "8px",
            fontSize: "16px",
            "&:hover": { backgroundColor: "#172554" },
          }}
        >
          Start Exploring
        </Button>
      </Box>

      {/* Right Section: Image */}
      <Box className="mt-10 md:mt-0">
        <img
          src="world.png"
          alt="Explore the World"
          className="rounded-lg shadow-lg w-[300px] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[350px] object-cover"
        />
      </Box>
    </main>
  );
};
