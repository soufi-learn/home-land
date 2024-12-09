import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className=" w-[90%] bg-gradient-to-b from-blue-500 to-blue-200 rounded-t-[3rem] h-screen mt-6 md:mt-10 mx-auto relative">
        <Image
          src="/images/header-home.png"
          width={500}
          height={300}
          className="w-full absolute top-0"
        />
      </div>

      <Image
        src="/images/backdrop.svg"
        width={500}
        height={300}
        className="w-full fixed top-0 right-0 pointer-events-none -z-10"
      />
    </header>
  );
};

export default Header;
