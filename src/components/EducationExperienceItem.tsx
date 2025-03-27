import { EducationExperienceProps } from "../types/types";

const EducationExperienceItem = ({
  dateRange,
  school,
  degree,
  format,
  place,
}: EducationExperienceProps) => {
  return (
    <div className="w-full flex justify-between relative h-fit md:py-6 py-4 mt-12 md:mt-0">
      <div className="w-[96%]">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="flex flex-col ">
              <p className="flex-nowrap text-[9px] whitespace-nowrap opacity-80 pb-2">
                {dateRange}
              </p>
              <h3 className="text-2xl tracking-tight">{school}</h3>
              <h4 className="text-sm">
                <span className="">{degree}</span> -
                <span className="font-baskervville-italic pl-2">{format}</span>
              </h4>
            </div>
          </div>
          <p className="text-xs text-black/70 font-normal">{place}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationExperienceItem;
