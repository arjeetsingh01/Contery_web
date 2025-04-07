import React, { useEffect, useState } from "react";
import { getCountryIndData } from "../../Countery/postApi";
import { useParams, useNavigate } from "react-router-dom";
import { Loadear } from "../ui/Lodear";

export const ConteryDetalies = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [country, setCountry] = useState(null);
  const [isPending, setIsPending] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryIndData(id);
        if (res.status === 200) {
          setCountry(res.data[0]); 
        }
      } catch (error) {
        console.error("Error fetching country details:", error);
      } finally {
        setIsPending(false); 
      }
    };

    fetchData();
  }, [id]); 

  if (isPending) return <Loadear />; 
  // Extract Native Names Correctly
  const nativeNames = country.name.nativeName
    ? Object.values(country.name.nativeName)
        .map((lang) => lang.common)
        .join(", ")
    : "N/A";

  // Extract Currencies Correctly
  const currencies = country.currencies
    ? Object.values(country.currencies)
        .map((cur) => cur.name)
        .join(", ")
    : "N/A";

  // Extract Languages Correctly
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center py-10">
      <div className="max-w-4xl w-full bg-gray-800 p-6 rounded-lg shadow-lg relative">
        
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between">
          {/* Country Flag (Left Side) */}
          <div className="w-full md:w-1/2 mt-10 flex justify-center">
            <img
              src={country.flags.svg || country.flags.png}
              alt={country.name.official}
              className="w-full max-w-md h-64 object-cover rounded border border-blue-500"
            />
          </div>

          {/* Country Details (Right Side) */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-10">
            <h1 className="text-3xl font-bold text-blue-400">{country.name.official}</h1>
            <p className="mt-2 text-lg"><strong>Native Name:</strong> {nativeNames}</p>
            <p className="mt-2 text-lg"><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p className="mt-2 text-lg"><strong>Region:</strong> {country.region}</p>
            <p className="mt-2 text-lg"><strong>Sub Region:</strong> {country.subregion}</p>
            <p className="mt-2 text-lg"><strong>Capital:</strong> {country.capital || "N/A"}</p>
            <p className="mt-2 text-lg"><strong>Top Level Domain:</strong> {country.tld[0]}</p>
            <p className="mt-2 text-lg"><strong>Currencies:</strong> {currencies}</p>
            <p className="mt-2 text-lg"><strong>Languages:</strong> {languages}</p>
          </div>
        </div>
      </div>
      <button 
          onClick={() => navigate(-1)} 
          className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
        >
          ← Go Back
        </button>
    </section>
  );
};
