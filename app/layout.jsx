import Link from "next/link";
import "@/app/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="flex relative bg-[#BFDBF7] rounded-lg w-full justify-between items-center px-8 py-4  shadow-sm">
          <div className="flex items-center">
            <div className="text-xl font-bold text-black">
              <span className="text-[#05668D] ">
                {" "}
                <Link href="/">University Management</Link>{" "}
              </span>
            </div>
          </div>
          <div>
            <ul className=" text-[#05668D] text-xl flex gap-4">
              <Link href="/dashboard"> Dashboard</Link>
              <li> Achivements</li>
              <Link href="/posts"> Posts </Link>
            </ul>
          </div>
          <div className="space-x-4">
            <button className="text-[#05668D] px-4 py-2 hover:rounded-md hover:bg-gray-900 font-medium">
              <Link href="/auth/signin"> login </Link>
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 hover:text-[#05668D] rounded-md hover:bg-gray-900">
              <Link href="/auth/signup"> signup </Link>
            </button>
            <span>EN</span>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
