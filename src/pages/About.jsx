import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import countryFactData from "../Countery/countery.json";

export const About = () => {
  return (
    <section className="px-6 py-10 bg-black text-white">
      {/* Heading */}
      <Typography variant="h4" className="text-center font-bold mb-6">
        Here are some interesting facts <br /> we're proud of!
      </Typography>

      {/* Country Facts Grid */}
      <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-6">
        {countryFactData.map((country) => {
          const { id, countryName, capital, population, interestingFact } = country;
          return (
            <Card
              key={id}
              className="shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              sx={{ backgroundColor: "#1e1e1e", color: "white" }} // Dark Card Theme
            >
              <CardContent>
                <Typography variant="h5" className="font-semibold">
                  {countryName}
                </Typography>
                <Typography variant="body1" className="text-gray-300">
                  <strong>Capital:</strong> {capital}
                </Typography>
                <Typography variant="body1" className="text-gray-300">
                  <strong>Population:</strong> {population.toLocaleString()}
                </Typography>
                <Typography variant="body2" className="italic text-gray-400 mt-2">
                  "{interestingFact}"
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </section>
  );
};
