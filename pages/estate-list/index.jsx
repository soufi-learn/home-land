import data from "../../data/db.json";
import Estate from "../../components/estates/estate";

function EstateList() {
  return (
    <div className="mx-10 mt-10">
      <h2 className="mb-5 text-white text-center md:text-left">
        Homes For Sale
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.homes.map((home) => (
          <Estate key={home.id} {...home} />
        ))}
      </div>
    </div>
  );
}

export default EstateList;
