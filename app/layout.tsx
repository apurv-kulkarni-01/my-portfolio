export const metadata = {
  title: "Apurv",
  description: "Portfolio website of Apurv Kulkarni",
};

type RootLayout = {
  children: any;
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
