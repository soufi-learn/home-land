import data from "../../data/db.json";
import Estate from "../../components/estates/estate";
import { useEffect, useState } from "react";

function EstateList() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [homes, setHomes] = useState(data.homes);

  useEffect(() => {
    const newHomes = data.homes.filter((home) =>
      home.title.toLowerCase().includes(search.toLowerCase())
    );
    setHomes(newHomes);
  }, [search]);

  return (
    <div className="mx-10 mt-10">
      <div className="flex justify-between items-center mb-4">
        <h2 className="mb-5 text-white text-center md:text-left">
          Homes For Sale
        </h2>
        {/* Filter methods */}
        <div className="flex items-center gap-4 flex-row-reverse">
          <input
            type="text"
            placeholder="search"
            className="px-2 py-[7px] rounded-md w-80 outline-none shadow-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            defaultValue={sort}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 outline-none"
          >
            <option value="-1" selected>
              sort homes
            </option>
            <option value="price">By Price</option>
            <option value="rom-count">By room count</option>
            <option value="meterage">By Meterage</option>
          </select>
        </div>
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
