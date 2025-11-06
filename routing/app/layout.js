export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header style={{background: "teal"}} >header</header>
       {children}
       <footer style={{background: "red"}}>footer</footer>
      </body>
    </html>
  );
}
