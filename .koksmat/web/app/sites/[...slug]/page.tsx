import Canvas from "@/app/sites/components/canvas";
//import p from "./page.json";
import * as fs from "fs";
import * as path from "path";
import { LinkItem, TopNav } from "../components/topnav";
import { ICanvas } from "../schema/canvas";
import { innerText, sectionHeaderAnchor } from "../util";
import { redirect } from "next/navigation";

export default function Page(param: { params: { slug: string[] } }) {
  const { slug } = param.params;

  if (slug.length < 2) {
    redirect("/sites/welcome-to-nexi/SitePages/Home.aspx");
  }
  const here = path.join(
    process.cwd(),
    "app",
    "sites",
    "[...slug]",
    ...slug,
    "page.json"
  );
  let pageData: ICanvas | null = null;
  const links: LinkItem[] = [];
  let error = "";

  if (error) {
    return <div>{error}</div>;
  }

  try {
    pageData = JSON.parse(fs.readFileSync(here, "utf-8"));

    pageData?.canvasLayout.horizontalSections.forEach((section) => {
      const text = sectionHeaderAnchor(
        section.emphasis,
        section.columns[0].webparts[0]
      );

      if (text === "") return;
      links.push({
        title: text,
        href: `#${text}`,
      });
    });
  } catch (e) {
    error = "Page not found " + (e as any).message;
  }

  return (
    <div>
      <div
        className="fixed w-screen top-0  h-[40px] bg-white"
        style={{ zIndex: 1 }}
      >
        <TopNav title={""} links={links} />
      </div>
      <div className="mt-[40px]">
        <Canvas canvas={pageData as any} />
      </div>
      {/* <pre>{JSON.stringify({ here }, null, 2)}</pre> */}
    </div>
  );
}
