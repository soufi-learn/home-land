import Image from "next/image";
import { FcHome } from "react-icons/fc";

const Home = ({ title, roomCount, img, price }) => {
  return (
    <>
      <div className="p-3 bg-white rounded-xl overflow-hidden relative pb-14">
        <Image
          src={img}
          alt={title}
          width={500}
          height={300}
          className="transition-all duration-700 hover:scale-110 cursor-pointer"
        />
        <div className="absolute bottom-0 right-0 left-0 p-2 bg-white">
          <div className="flex justify-between items-center mb-2">
            <h4 className="flex  items-center gap-2 md:text-lg xl:text-xl">
              <FcHome className="md:hidden xl:block" />
              {title}
            </h4>
            <div className="flex flex-col">
              {/* <span>room: {roomCount}</span> */}
              <span>price: $ {price.toLocaleString()}</span>
            </div>
          </div>
          <button className="bg-blue-600 text-white transition-all hover:bg-blue-700 block w-full p-2 rounded-md font-bold">
            Details
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
