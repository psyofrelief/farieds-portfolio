import "@/styles/main.scss";
import { MyProvider } from "@/context/index";
import PageWrapper from "./pageWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Farieds porfolio" />
        <link rel="icon" href="./icon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body>
        <MyProvider>
          <PageWrapper>{children}</PageWrapper>
        </MyProvider>
      </body>
    </html>
  );
}
