import React from "react";

export default function IconMenu({
  icon,
  count,
}: {
  icon: React.ReactNode;
  count: number;
}) {
  return (
    <div className="relative">
      {icon}
      <div className="rounded-full absolute -top-3 font-semibold -right-2 h-5 w-5 flex justify-center items-center text-[10px] text-white bg-linear-to-r from-[#A20915] to-[#E40C1E] border border-white">
        {count}
      </div>
    </div>
  );
}
