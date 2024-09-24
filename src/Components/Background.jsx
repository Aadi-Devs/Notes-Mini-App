import React from "react";

function Background() {
  return (
    <>
      <div className="fixed flex justify-center items-center z-[2] w-full h-screen">
        <div className="flex absolute top-[4%] w-full justify-center text-2xl text-zinc-700">
          Notes
        </div>
        {/* <h1 className="text-7xl text-zinc-700 leading-none tracking-tighter">
          Mini Docs App.
        </h1> */}
      </div>
    </>
  );
}

export default Background;
