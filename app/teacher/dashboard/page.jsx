/* eslint-disable @next/next/no-img-element */
import "@/app/globals.css";
import React from "react";

const Deshboardpage = () => {
  return (
    <div className=" flex">
      <div className=" flex justify-between">
        <div>
          <input />
          <div> Teacher page </div>
        </div>
        <div>
          <div className=" flex">
            <img
              src="/default.jpg"
              alt="User"
              className="w-24 h-24 rounded-full"
            />
            <div>
              <p> User</p> <p> year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deshboardpage;
