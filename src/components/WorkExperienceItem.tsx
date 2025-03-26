import { WorkExperienceProps } from "../types/types";
import Image from "next/image";

const WorkExperienceItem = ({
  dateRange,
  role,
  company,
  companyType,
  skills,
  description,
  logo,
}: WorkExperienceProps) => {
  return (
    <div className="w-full flex justify-between relative h-fit py-8">
      <div className="h-full w-3 pb-6 mt-auto relative hidden ">
        <p className="flex-nowrap text-[9px] -rotate-90 whitespace-nowrap opacity-80">
          {dateRange}
        </p>
      </div>

      <div className="md:w-[86%] w-full">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="w-12 h-12 min-w-12 my-auto">
              <Image
                src={logo}
                alt=""
                width={400}
                height={300}
                className="object-contain w-full h-full"
              />
            </div>

            <div className="flex flex-col">
              <p className="flex-nowrap  text-[9px] whitespace-nowrap opacity-80 pb-2">
                {dateRange}
              </p>
              <h3 className="text-2xl tracking-tight">{role}</h3>
              <h4 className="text-sm">
                <span className="font-semibold">{company}</span>
                <span className="text-xs font-baskervville-italic pl-2">
                  ({companyType})
                </span>
              </h4>
              <div className="flex gap-1 mt-2 flex-wrap">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-indigo-300 rounded-full px-2 text-xs py-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-black/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
