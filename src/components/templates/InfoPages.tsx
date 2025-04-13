import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { getChars } from "@/utils/getChars";
import SocialsComponent from "../SocialsComponent";

type InfoPagesTemplateProps = {
  children: ReactNode;
  className?: string;
  title: string;
};

const InfoPages = ({ children, title }: InfoPagesTemplateProps) => {
  return (
    <>
      {/* <NavigationNavbar /> */}
      <div className="flex bg-[#f2f2f2] items-center flex-col px-4 z-0 mb-20 w-full ">
        <div
          className="w-full max-w-[880px] mx-auto text-left z-40 bg-[#f2f2f2] flex fixed md:h-[220px] h-[150px] md:pt-20"
          style={{
            boxShadow: "0 5px 5px -3px #f2f2f2, 0 4px 6px -4px #f2f2f2",
          }}
        >
          <div className="text-6xl md:text-9xl flex items-center tracking-tighter text-black/80 fixed pt-20 md:pt-0 pl-3 md:pl-0 overflow-hidden">
            {getChars(title)}
          </div>
          <div className="flex flex-col ml-auto mt-24 mr-4 mb-auto md:mt-4">
            {title === "CV" && (
              <>
                <motion.a
                  href="/CV-Valentina-Marino-FE.pdf"
                  download
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="text-xs px-3 py-1 border rounded-full border-black/40 transition-all hover:shadow-md duration-300"
                >
                  Download CV
                </motion.a>
              </>
            )}
            <SocialsComponent
              color="black"
              hasPhoneNumber={false}
              className={`text-sm mt-4 ${
                title === "CV" ? "hidden md:block" : "-mt-4 md:mt-6 "
              } `}
            />
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
          className="w-full max-w-[880px] m-auto flex flex-col self-center relative pt-32"
        >
          <div className="mt-0 md:mt-32 z-30 overflow-hidden">{children}</div>
        </motion.div>
      </div>
    </>
  );
};

export default InfoPages;
