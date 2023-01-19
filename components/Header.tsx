import Link from "next/link";
import Image from "next/image";
import DarkModeButton from "./DarkModeButton";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="https://avatars.githubusercontent.com/u/55769408?v=4"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <Link
          href="https://adperformance.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-2 py-3 text-sm md:text-base bg-[#8F00FF] text-[#FFF] hover:bg-[#483248] transition-all duration-[350ms] ease-out flex items-center rounded-lg text-center"
        >
          AD Performance 🌐
        </Link>
        <DarkModeButton />
      </div>
    </header>
  );
};

export default Header;
