import { useRouter } from "next/router";
import { homes } from "../../data/db.json";

const SingleEstate = () => {
  const { query } = useRouter();
  const home = homes.find((home) => home.id === Number(query.id));

  if (!home) {
    return <div className="text-center py-8 text-white">Home not found.</div>;
  }

  return (
    <div className="container pt-6 px-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
        {/* Image Section */}
        <div className="relative w-2/5">
          <img
            src={home.img}
            alt={home.title}
            className="w-full  object-cover object-center"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 w-3/5">
          {/* Title and Price */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {home.title}
            </h2>
            <span className="text-xl font-bold text-indigo-600">
              ${home.price}
            </span>
          </div>
          {/* Room Count */}
          <p className="text-gray-600 mb-4">
            <span className="font-medium">Rooms:</span> {home.roomCount}
          </p>
          {/* Description  */}
          <p className="text-gray-700 leading-relaxed">{home.description}</p>
          <div className="mt-6 border-t pt-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Features
            </h3>
            <ul className="text-gray-700 space-y-1">
              <li>
                <span className="font-medium">Garage:</span> Yes
              </li>
              <li>
                <span className="font-medium">Pool:</span> No
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEstate;
