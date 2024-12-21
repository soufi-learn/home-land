import Image from "next/image";
import { FcHome } from "react-icons/fc";

const Home = ({ title, roomCount, img, price }) => {
  return (
    <div className="p-3 bg-white rounded-md overflow-hidden relative pb-14">
      <Image
        src={img}
        alt={title}
        width={500}
        height={300}
        className=" transition-all duration-700 hover:scale-110 cursor-pointer"
      />
      <div className="bg-white p-2 absolute bottom-0 right-0 flex justify-between items-center left-0">
        <h2 className="flex  items-center gap-2">
          <FcHome />
          {title}
        </h2>
        <div className="flex flex-col">
          <span>room: {roomCount}</span>
          <span>price: {price}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
