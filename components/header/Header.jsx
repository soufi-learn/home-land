import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";

const Header = ({ children }) => {
  const router = useRouter();

  const isActiveLink = (href) => {
    return router.pathname === href ? true : false;
  };

  return (
    <header>
      <div className="w-full md:w-[90%] bg-gradient-to-b from-blue-600 to-transparent rounded-t-[3rem] mt-6 min-h-screen md:mt-10 mx-auto relative">
        <nav className="py-5 px-20 ">
          <ul className="border-b border-white py-4 flex items-center gap-8">
            <li>
              <Link href="/" className="flex items-center gap-2">
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
              </Link>
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
            <li>
              <Link
                href="/estate-list"
                className={`text-blue-200 ${
                  isActiveLink("/estate-list") ? "!text-white" : null
                }`}
              >
                Homes
              </Link>
            </li>
          </ul>
        </nav>
        {/* header image */}
        {router.pathname === "/" && (
          <>
            <h1 className="absolute top-52 left-1/2 -translate-x-1/2 lg:text-[3rem] xl:text-[4rem] w-full text-center text-white">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Home Land Project")
                    .callFunction(() => {
                      console.log("String typed out!");
                    })
                    .pauseFor(2500)
                    .deleteAll()
                    .callFunction(() => {
                      console.log("All strings were deleted");
                    })
                    .start();
                }}
                options={{
                  loop: true,
                  delay: 100,
                }}
              />
            </h1>

            <Image
              src="/images/header-home.png"
              width={500}
              height={300}
              alt="building"
              className="w-full h-[630px] object-cover top-0  pointer-events-none opacity-90"
              priority
            />
          </>
        )}

        {children}
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
