import Image from "next/image";
import Link from "next/link";

const Estate = ({ id, title, roomCount, img, price }) => {
  return (
    <>
      <div className="p-3 bg-white rounded-[18px] overflow-hidden relative pb-14">
        <Image
          src={img}
          alt={title}
          width={500}
          height={300}
          className="transition-all duration-700 hover:scale-110 cursor-pointer rounded-md"
        />
        <div className="absolute bottom-0 right-0 left-0 p-2 bg-white flex justify-between items-center">
          <div>
            <h4 className="flex  items-center gap-2 md:text-lg xl:text-xl">
              {title}
            </h4>
            <span>price: $ {price.toLocaleString()}</span>
          </div>
          <Link
            href={`/estate-list/${id}`}
            className="bg-blue-600 text-white transition-all hover:bg-blue-700 px-6 p-2 rounded-md font-bold"
          >
            Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default Estate;
