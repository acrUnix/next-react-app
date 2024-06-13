import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className='py-3 flex justify-center items-center bg-blue-300'>
          esto es parte de (layaut) para todas las paginas
        </footer>
        <p></p>
      </body>
    </html>
  );
}
