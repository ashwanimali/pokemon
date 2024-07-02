import React, { useState } from "react";

const Tooltip = ({ text, children }: { text: any; children: any }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="flex relative justify-end">
      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(true)}
        className="inline-block"
      >
        {children}
      </div>
      {showTooltip && (
       

        <div
          className="rounded-lg md:block items-center sm:hidden h-[5rem] w-[7rem] top-[-5rem]"
          style={{
            position: "absolute",
            backgroundColor: "white",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
            zIndex: 1,
          }}
        >
          <div className="flex flex-col p-[0.55rem] mb-2 w-full cursor-pointer">
            <div
              className="flex flex-row pt-1 pb-1 justify-center hover:bg-primary-light font-montserrat"
            >
              {text}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
