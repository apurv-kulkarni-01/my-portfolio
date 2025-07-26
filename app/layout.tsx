import Link from "next/link";
import NavigationBar from "@/components/navigation/navigation";

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
      <body>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
