import React from "react";

export const SearchFilter = ({ search, setSearch, filter, setFilter, conteries, setConteries }) => {
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const shortContery = (value) => {
    const sortedCountries = [...conteries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setConteries(sortedCountries);
  };

  return (
    <section className="flex flex-row justify-between items-center p-3 rounded-lg shadow-md text-white min-h-[50px] mb-6 bg-gray-800">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
        className="w-1/4 p-2 bg-white text-black rounded-md border border-gray-300 focus:outline-none"
      />

      {/* Sort Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => shortContery("asc")}
          className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 transition"
        >
          Asc
        </button>
        <button
          onClick={() => shortContery("dsc")}
          className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 transition"
        >
          Dsc
        </button>
      </div>

      {/* Filter Dropdown */}
      <select
        value={filter}
        onChange={handleSelectChange}
        className="w-1/6 p-2 bg-white text-black rounded-md border border-gray-300 focus:outline-none"
      >
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
      </select>
    </section>
  );
};
