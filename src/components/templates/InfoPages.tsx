import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { getChars } from "@/utils/getChars";
import Image from "next/image";

type InfoPagesTemplateProps = {
  children: ReactNode;
  className?: string;
  title: string;
};

const InfoPages = ({ children, title }: InfoPagesTemplateProps) => {
  return (
    <>
      {/* <NavigationNavbar /> */}
      <div
        className="flex bg-[#f2f2f2] items-center flex-col px-4 z-0 mb-20 
       w-full "
      >
        <div className="w-full max-w-[800px] mx-auto text-left z-40 bg-[#f2f2f2] flex fixed md:h-[220px] h-[150px] md:pt-20">
          <div className="text-6xl md:text-9xl flex items-center tracking-tighter text-black/80 fixed pt-20 md:pt-0 pl-3 md:pl-0 overflow-hidden">
            {/* <Link href="/" className="pr-4 md:hidden flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </Link> */}
            {getChars(title)}
          </div>
          <div className="flex flex-col ml-auto mt-24 mr-4 mb-auto md:mt-4">
            {title === "CV" && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                className=" text-xs px-3 py-1 border rounded-full border-black/40 "
              >
                Download CV
              </motion.button>
            )}
          </div>
        </div>
        <Link
          href="/"
          className=" fixed top-[50%] z-50 hidden  md:top-[90px] left-3 w-12 h-12 md:flex justify-center items-center rounded-full border border-black/40 transition-colors bg-white/20 backdrop-blur-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </Link>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
          className="w-full max-w-[800px] m-auto flex flex-col self-center relative pt-32"
        >
          <div className="mt-0 md:mt-32 z-30 overflow-hidden">{children}</div>
        </motion.div>
      </div>
      {/* <div className="w-full h-24 z-50 bg-gradient-to-b from-transparent from-10% to-[#f2f2f2] to-80% fixed bottom-8"></div> */}

      <div className="w-full text-sm fixed bottom-0 z-50 h-8 ">
        <div className="w-full h-full relative items-center justify-evenly flex">
          <div className="flex justify-evenly items-center w-full h-full z-50">
            <p>email</p>
            <p>linkedIn</p>
            <p>github</p>
            <p className="text-xs ">+31 648664605</p>
          </div>
          <div className="w-full h-full absolute z-10 backdrop-blur-[80px]">
            <Image
              src="/media/selected.png"
              height={620}
              width={660}
              alt="Footer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* {" "}
        {" "} */}
      </div>
    </>
  );
};

export default InfoPages;
