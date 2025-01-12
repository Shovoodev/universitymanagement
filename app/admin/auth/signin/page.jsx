"use client";
import "@/app/globals.css";
import { useState } from "react";
const Signin = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    await e.preventDefault();
    const res = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!res.ok) {
      throw new Error("Failed to register");
    }

    console.log("Registered data:", { userData });
    setUserData({ email: "", password: "" });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#00A896]">
      <div className="bg-[#F0F3BD] p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl text-[#028090] font-bold text-center mb-6">
          Log In{" "}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex gap-4 justify-center items-center">
            <label className="block text-sm text-[#028090] font-medium ">
              Email{" "}
            </label>
            <input
              className="mt-1 block px-3 py-2 text-black border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              type="email"
              label="Enter email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
          </div>
          <div className="flex gap-4 justify-center items-center">
            <label className="block text-sm text-[#028090] font-medium ">
              Password{" "}
            </label>
            <input
              className="mt-1 block px-3 py-2 text-black  border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              type="password"
              label="Enter Password"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
          </div>
          <button
            className="w-[50%] ml-[25%] mt-4 bg-blue-500 text-white py-2 px-2 rounded-md hover:bg-blue-600  "
            type="submit"
          >
            SignIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
