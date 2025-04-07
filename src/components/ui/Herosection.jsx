import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Explore } from "@mui/icons-material";

export const Herosection = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-black">
      {/* Left Section: Text Content */}
      <Box className="max-w-xl text-center md:text-left">
        <Typography
          variant="h3"
          className="font-bold text-white mb-6"
          sx={{ marginBottom: "20px" }}
        >
          Explore the World, One Country at a Time
        </Typography>
        <Typography
          variant="body1"
          className="text-gray-300"
          sx={{ marginBottom: "20px" }}
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
            backgroundColor: "#1e3a8a", // Custom primary color
            padding: "12px 24px",
            fontSize: "16px",
            "&:hover": { backgroundColor: "#172554" }, // Darker on hover
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
          className="rounded-lg shadow-lg w-[500px] h-[350px] object-cover"
        />
      </Box>
    </main>
  );
};
