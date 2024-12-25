import Image from "next/image";
import { FcHome } from "react-icons/fc";

const Home = ({ title, roomCount, img, price }) => {
  return (
    <>
      <div className="p-3 bg-white rounded-md overflow-hidden relative pb-14">
        <Image
          src={img}
          alt={title}
          width={500}
          height={300}
          className="transition-all duration-700 hover:scale-110 cursor-pointer"
        />
        <div className="absolute bottom-0 right-0 left-0 p-2 bg-white">
          <div className=" flex justify-between items-center ">
            <h4 className="flex  items-center gap-2">
              <FcHome />
              {title}
            </h4>
            <div className="flex flex-col">
              <span>room: {roomCount}</span>
              <span>price: {price}</span>
            </div>
          </div>
          <button className="bg-blue-400 block w-full p-2 rounded-md font-bold">
            Details
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
