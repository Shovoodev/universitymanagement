"use client";
import Link from "next/link";
import React, { useState } from "react";

const Register = () => {
  const [dataVales, setData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending Data:", dataVales);
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataVales),
      });

      if (!res.ok) {
        throw new Error("Failed to register");
      }

      console.log("Registered data:", { dataVales });
      setData({ email: "", username: "", password: "" });
    } catch (error) {
      console.error("Registration error:", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit} className="w-full pb-2">
          <div className="flex gap-4 justify-center items-center">
            <label className="block text-sm text-[#028090] font-medium ">
              Username{" "}
            </label>
            <input
              className="mt-1 block px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              type="text"
              label="Enter Username"
              onChange={(e) =>
                setData({ ...dataVales, username: e.target.value })
              }
            />
          </div>
          <div className="flex gap-4 justify-center items-center">
            <label className="block text-sm text-[#028090] font-medium ">
              Email{" "}
            </label>
            <input
              className="mt-1 block px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              type="email"
              label="Enter email"
              onChange={(e) => setData({ ...dataVales, email: e.target.value })}
            />
          </div>

          <div className="flex gap-4 justify-center items-center">
            <label className="block text-sm text-[#028090] font-medium ">
              password{" "}
            </label>
            <input
              className="mt-1 block px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              type="password"
              label="Enter Password"
              onChange={(e) =>
                setData({ ...dataVales, password: e.target.value })
              }
            />
          </div>
          <button
            className="w-[50%] ml-[25%] mt-4 bg-blue-500 text-white py-2 px-2 rounded-md hover:bg-blue-600  "
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className=" flex-initial">
          already have an account{" "}
          <Link
            href="/auth/signin"
            className="ml-5 text-lgpy-2 px-4 py-1 rounded-md hover:bg-blue-600  bg-blue-500 text-white"
          >
            LogIn
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
