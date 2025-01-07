import data from "../../data/db.json";
import Estate from "../../components/estates/estate";
import { useEffect, useState } from "react";

function EstateList() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("-1");
  const [homes, setHomes] = useState(data.homes);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newHomes = data.homes.filter((home) =>
      home.title.toLowerCase().includes(search.toLowerCase())
    );
    setHomes(newHomes);
  }, [search]);

  useEffect(() => {
    switch (sort) {
      case "price": {
        const newHomes = [...homes].sort((a, b) => a.price - b.price);
        setHomes(newHomes);
        break;
      }

      case "room-count": {
        const newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount);
        setHomes(newHomes);
        break;
      }
      case "meterage": {
        const newHomes = [...homes].sort((a, b) => a.meterage - b.meterage);
        console.log("meterage");
        setHomes(newHomes);
        break;
      }
      default: {
        if (search) {
          setHomes([...homes]);
        } else {
          setHomes([...data.homes]);
        }
        break;
      }
    }
  }, [sort]);

  const paginateHandler = (e, page) => {
    e.preventDefault();
    setPage(page);

    let endIndex = 3 * page;
    let startIndex = endIndex - 3;

    let paginatedHomes = data.homes.slice(startIndex, endIndex);
    setHomes(paginatedHomes);
  };
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
            onChange={(e) => setSort(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 outline-none"
          >
            <option value="-1">sort homes</option>
            <option value="price">By Price</option>
            <option value="room-count">By room count</option>
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

      <div className="flex mt-10 justify-center gap-4">
        {Array.from({ length: Math.ceil(data.homes.length / 3) }).map(
          (item, index) => (
            <a
              key={index}
              href="#"
              onClick={(e) => paginateHandler(e, index + 1)}
              className={` ${
                page === index + 1
                  ? "bg-gray-700 text-white"
                  : "hover:bg-gray-100 hover:text-gray-900"
              } flex items-center justify-center px-4 h-9  font-medium text-gray-700 bg-white border border-gray-300 rounded-lg  `}
            >
              {index + 1}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default EstateList;
