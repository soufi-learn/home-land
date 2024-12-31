import data from "../../data/db.json";
import Estate from "../../components/estates/estate";
import { useEffect, useState } from "react";

function EstateList() {
  const [search, setSearch] = useState("");
  const [homes, setHomes] = useState(data.homes);

  useEffect(() => {
    const newHomes = data.homes.filter((home) =>
      home.title.toLowerCase().includes(search.toLowerCase())
    );
    setHomes(newHomes);
  }, [search]);

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="mx-10 mt-10">
      <div className="flex justify-between ">
        <h2 className="mb-5 text-white text-center md:text-left">
          Homes For Sale
        </h2>
        <input
          type="text"
          placeholder="search"
          className="px-2 py-1 rounded-md w-80 mb-4 outline-none shadow-md"
          value={search}
          onChange={changeSearch}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {homes.map((home) => (
          <Estate key={home.id} {...home} />
        ))}
      </div>
      {!homes.length && (
        <h3 className="text-white mt-10 text-center">Home Not Found!</h3>
      )}
    </div>
  );
}

export default EstateList;
