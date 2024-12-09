import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className=" w-[90%] bg-gradient-to-b from-blue-500 to-blue-200 rounded-t-[3rem] h-[95vh] mt-6 md:mt-10 mx-auto relative">
        <nav className="py-5 px-20 ">
          <ul className="border-b border-white py-4">
            <li>
              <a href="#" className="flex items-center gap-2">
                {/* Logo */}
                <Image
                  src="/images/logo.png"
                  width={24}
                  height={24}
                  className=""
                />
                <span className="font-bold text-white leading-none">
                  Home
                  <br />
                  Land
                </span>
              </a>
            </li>

            <li>
              <a href="#"></a>
            </li>
          </ul>
        </nav>

        {/* header image */}
        <Image
          src="/images/header-home.png"
          width={500}
          height={300}
          className="w-full absolute top-0 h-full"
        />
      </div>

      {/* line backdrop */}
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
