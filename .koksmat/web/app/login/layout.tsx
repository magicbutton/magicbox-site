import { TopNav } from "../sites/components/topnav";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      <TopNav title={"Explore Nexi before your 1st day"} links={[]} />
      <div className="h-screen w-screen overflow-scroll p-10 container ">
        <div>{children}</div>
      </div>
    </div>
  );
}
