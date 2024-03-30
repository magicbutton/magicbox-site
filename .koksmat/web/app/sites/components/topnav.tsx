import { SITENAME } from "@/app/global";
import Logo from "@/koksmat/components/logo";
import Link from "next/link";

export type LinkItem = {
  title: string;
  href: string;
};
export type TopNavProps = {
  title: string;
  links: LinkItem[];
  debug?: boolean;
};
export function TopNav(props: TopNavProps) {
  const { title, debug } = props;
  return (
    <div className=" bg-white p-4 border-b" style={{ zIndex: 1 }}>
      <div className="container">
        <div className="flex ">
          <div className="flex items-center">
            <Logo homeUrl={"/"} />
          </div>
          <Link href="#" className="text-black">
            <div className="ml-4 pt-2 text-2xl text-nowrap">{SITENAME}</div>
          </Link>
          <div className="ml-10 flex items-center space-x-4 overflow-x-scroll">
            {props.links.map((link) => {
              return (
                <a
                  href={link.href}
                  key={link.href}
                  className="ml-2 pt-1 text-nowrap"
                >
                  {link.title}
                </a>
              );
            })}
          </div>
        </div>
        {debug && <pre>{JSON.stringify(props, null, 2)}</pre>}
      </div>
    </div>
  );
}
