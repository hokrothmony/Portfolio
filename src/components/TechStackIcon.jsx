import React from "react";
import { Folder } from "lucide-react";

const TechStackIcon = ({
  TechStackIcon,
  Language,
  photos = [],
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer flex flex-col items-center justify-center"
    >
      {/* Folder */}
      <div className="relative w-32 h-24 md:w-40 md:h-28 transition-all duration-300 group-hover:scale-105">

        {/* Folder tab */}
        <div className="absolute -top-2 left-2 w-14 h-6 bg-yellow-400 rounded-t-lg" />

        {/* Folder body */}
        <div className="absolute inset-0 top-2 bg-yellow-400 rounded-xl shadow-lg flex items-center justify-center">

          <img
            src={TechStackIcon}
            alt={`${Language} icon`}
            className="relative h-12 w-12 md:h-16 md:w-16 object-contain transition-transform duration-300 group-hover:scale-110"
          />

        </div>

      </div>

      {/* Name */}
      <span className="mt-4 text-slate-300 font-semibold text-sm md:text-base group-hover:text-white transition-colors">
        {Language}
      </span>

      {/* Photo count */}
      {photos.length > 0 && (
        <span className="text-xs text-slate-500 mt-1">
          {photos.length} photos
        </span>
      )}
    </div>
  );
};

export default TechStackIcon;