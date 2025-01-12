import Link from "next/link";
import "@/app/globals.css";
export default function Rootlayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
