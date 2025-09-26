import Link from "next/link";
import NavigationBar from "@/components/navigation/navigation";

export const metadata = {
  title: "Apurv Kulkarni",
  description: "Apurv Kulkarni personal portfolio.",
};

type RootLayout = {
  children: any;
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
