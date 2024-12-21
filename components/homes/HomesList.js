import data from "../../data/db.json";
import Home from "./Home";

function HomesList() {
  return (
    <div>
      {data.homes.map((home) => (
        <Home key={home.id} {...home} />
      ))}
    </div>
  );
}

export default HomesList;
