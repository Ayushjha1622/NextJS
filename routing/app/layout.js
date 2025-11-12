export const metadata = {
  title:{
    template: "%s | Technical Agency",
    default: "Technical Agency",
  },
  description: "This is the technical agency website",
};


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        
       {children}
       
      </body>
    </html>
  );
}
