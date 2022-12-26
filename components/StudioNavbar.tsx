import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const StudioNavbar = (props: any) => {
  return (
    <div>
      <>
        <div className="flex items-center justify-between p-5">
          <Link className="text-[#bd93f9] flex items-center" href="/">
            <ArrowUturnLeftIcon className="h-6 w-6 text-[#bd93f9] mr-2" />
            Go To Website
          </Link>

          <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#bd93f9]">
            <h1 className="font-bold text-white">Check out my portfolio</h1>
            <Link
              className="text-[#bd93f9] font-bold ml-2"
              href="https://alladin-daher.netlify.app/"
            >
              www.alladin-daher.netlify.app
            </Link>
          </div>
        </div>
        {props.renderDefault(props)}
      </>
    </div>
  );
};

export default StudioNavbar;