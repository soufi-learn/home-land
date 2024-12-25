import data from "../../data/db.json";
import Home from "./Home";

function HomesList() {
  return (
    <div className="mx-10 mt-10">
      <h2 className="mb-5 text-white">Homes For Sale</h2>
      <div className="grid grid-cols-3 gap-5">
        {data.homes.map((home) => (
          <Home key={home.id} {...home} />
        ))}
      </div>
    </div>
  );
}

export default HomesList;