import React from "react";

const LanguagesContent = () => {
  return (
    <div className="flex text-black/90 pt-4 z-50 text-sm">
      <div className="flex flex-col gap-3">
        <h5 className="text-2xl">Languages</h5>
        <ul className="flex flex-col space-y-1">
          <li>
            <span>English</span> -
            <span className="pl-1  text-sm font-baskervville-italic">
              Professional
            </span>
          </li>
          <li>
            <span>Spanish</span> -
            <span className="pl-1  text-sm font-baskervville-italic">
              Native
            </span>
          </li>
          <li>
            <span>French</span> -
            <span className="pl-1  text-sm font-baskervville-italic">
              Professional
            </span>
          </li>
          <li>
            <span>Portuguese(BR)</span> -
            <span className="pl-1  text-sm font-baskervville-italic">
              Advanced
            </span>
          </li>
          <li>
            <span>Dutch</span> -
            <span className="pl-1  text-sm font-baskervville-italic">
              Basics
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguagesContent;
