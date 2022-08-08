import * as React from "react";

//======================================
export const ImageBg = () => {
  //======================================return
  return (
    <div className="absolute inset-0 grid w-full h-full">
      <picture>
        <img
          src="/oooscillate.png"
          alt="background"
          className="z-0 w-full h-full object-cover"
        />
      </picture>
    </div>
  );
};
