"use client";
import { SITENAME } from "@/app/global";
import Logo from "@/koksmat/components/logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import PageNavigator from "./pagenavigator";

export function BurgerMenu(prop: { links: LinkItem[] }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <GiHamburgerMenu></GiHamburgerMenu>
      </SheetTrigger>
      <SheetContent>
        {/* <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader> */}
        <div className="grid gap-4 py-4 overflow-y-scroll">
          <PageNavigator
            links={prop.links}
            linkClassname="ml-2 pt-1 text-nowrap whitespace-nowrap text-black hover:underline"
          />
        </div>

        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}

export type LinkItem = {
  title: string;
  href: string;
  id?: string;
};
export type TopNavProps = {
  title: string;
  links: LinkItem[];
  debug?: boolean;
};
export function TopNav(props: TopNavProps) {
  const { title, debug, links } = props;

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
          <div className="grow"></div>
          <div className="mt-4 lg:hidden text-black">
            {links.length > 0 && <BurgerMenu links={links} />}
          </div>
          {/* <div className="hidden lg:flex ml-10  items-center space-x-4 overflow-x-scroll">
            <ScrollSpy activeClass="nav-active">{links}</ScrollSpy>
          </div> */}
        </div>
        {debug && <pre>{JSON.stringify(props, null, 2)}</pre>}
      </div>
    </div>
  );
}
