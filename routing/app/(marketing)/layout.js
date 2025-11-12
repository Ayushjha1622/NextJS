

export default function RootLayout({ children }) {
  return (
   
        <>
        <header style={{background: "purple"}} >header(Marketing)</header>
       {children}
       <footer style={{background: "pink"}}>footer(Marketing)</footer>
     
        </>
  );
}
