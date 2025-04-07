import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"; // Importing Icon

export const Cardcanter = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="flex justify-center">
      <div className="w-80 max-w-xs bg-gray-900 mt-3 mb-3 text-white border border-blue-500 shadow-lg shadow-blue-500/50 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 cursor-pointer">
        {/* Country Flag */}
        <img
          src={flags?.svg || flags?.png}
          alt={`${name?.common} flag`}
          className="w-full h-40 object-cover border-b border-blue-500"
        />

        {/* Country Details */}
        <div className="p-5 flex flex-col gap-2">
          <h3 className="text-xl font-bold text-blue-400">{name?.common}</h3>
          <p className="text-gray-300 text-lg">
            <strong>Population:</strong> {population.toLocaleString()}
          </p>
          <p className="text-gray-300 text-lg">
            <strong>Region:</strong> {region}
          </p>
          <p className="text-gray-300 text-lg">
            <strong>Capital:</strong> {capital || "N/A"}
          </p>


          {/* Read More Button */}
          <NavLink to={`/country/${name?.common}`} className="mt-2">
            <Button
              variant="contained"
              size="small"
              color="primary"
              endIcon={<ArrowForwardIosIcon />}
              className="bg-blue-600 hover:bg-blue-800 transition duration-300"
            >
              Read More
            </Button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
