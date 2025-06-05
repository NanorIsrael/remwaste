import "../css/style.css";
import Header from "../../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  );
}
