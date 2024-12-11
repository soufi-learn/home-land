import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const isActiveLink = (href) => {
    console.log(router.asPath);
    return router.asPath === href ? true : false;
  };

  return (
    <header>
      <div className=" w-[90%] bg-gradient-to-b from-blue-600 to-blue-200 rounded-t-[3rem] h-[95vh] mt-6 md:mt-10 mx-auto relative">
        <nav className="py-5 px-20 ">
          <ul className="border-b border-white py-4 flex items-center gap-8">
            <li>
              <a href="#" className="flex items-center gap-2">
                {/* Logo */}
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={24}
                  height={24}
                  priority
                />
                <span className="font-bold text-white leading-none">
                  Home
                  <br />
                  Land
                </span>
              </a>
            </li>

            <li>
              <Link
                href="/"
                className={`text-blue-200 ${
                  isActiveLink("/") ? "!text-white" : null
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/samples"
                className={`text-blue-200 ${
                  isActiveLink("/samples") ? "!text-white" : null
                }`}
              >
                Samples
              </Link>
            </li>
            <li>
              <Link
                href="/gallery"
                className={`text-blue-200 ${
                  isActiveLink("/gallery") ? "!text-white" : null
                }`}
              >
                Gallery
              </Link>
            </li>
          </ul>
        </nav>

        {/* header image */}
        <Image
          src="/images/header-home.png"
          width={500}
          height={300}
          alt="building"
          className="w-full absolute top-0 h-full pointer-events-none"
          priority
        />
      </div>

      {/* line backdrop */}
      <Image
        src="/images/backdrop.svg"
        width={500}
        height={300}
        alt="backdrop"
        className="w-full fixed top-0 right-0 pointer-events-none -z-10"
      />
    </header>
  );
};

export default Header;
