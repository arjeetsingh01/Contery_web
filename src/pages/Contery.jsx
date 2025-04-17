import React, { useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../Countery/postApi';
import { Loadear } from '../components/ui/Lodear';
import { Cardcanter } from '../components/Layout/Cardcanter';
import { SearchFilter } from '../components/ui/SearchFilter';

export const Contery = () => {
  const [isPanding, startTransition] = useTransition();
  const [conteries, setConteries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setConteries(res.data);
      console.log(res);
    });
  }, []);

  if (isPanding) return <Loadear />;

  // Search Function
  const seracrhCountery = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true; // Return true to keep all countries when no search is entered
  };

  // Filter by Region
  const filterResgion = (country) => {
    if (filter === "all") return true;
    return country.region === filter;
  };

  const filterConteris = conteries.filter(
    (country) => seracrhCountery(country) && filterResgion(country)
  );

  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-16 bg-black min-h-screen">
      {/* Search and Filter Component */}
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        conteries={conteries}
        setConteries={setConteries}
      />

      {/* Country Cards */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {filterConteris.map((curt, index) => (
          <Cardcanter key={index} country={curt} />
        ))}
      </ul>
    </section>
  );
};
