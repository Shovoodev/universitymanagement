export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className=" flex"> <ul>  <li> Home </li> <li>About</li> </ul> </nav>
        {children}</body>
    </html>
  )
}