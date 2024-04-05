"use client";
import { ca } from "date-fns/locale";
import { HorizontalSection, ICanvas } from "../schema/canvas";
import SectionHorizontal from "./section-horizontal";
import SectionVertical from "./section-vertical";
import TitleAreaComponent from "./titlearea";
import { LinkItem } from "./topnav";

import { useEffect, useState } from "react";
import PageNavigator from "./pagenavigator";

export type CanvasProps = {
  debug?: boolean;
  canvas: ICanvas;
  links: LinkItem[];
};
type SectionGroup = {
  id: string;
  sections: HorizontalSection[];
};
export default function Canvas(props: CanvasProps) {
  const { canvas, debug, links } = props;
  const horisontalSectionGroups: SectionGroup[] = [];

  let sectionGroup: SectionGroup = { id: "", sections: [] };
  let sections = canvas?.canvasLayout.horizontalSections ?? [];
  let heroSection = null;
  for (let index = 0; index < sections.length; index++) {
    const section = sections[index];
    if (index === 0 && section.layout === "fullWidth") {
      heroSection = section;
      continue;
    }
    sectionGroup.sections.push(section);
  }
  horisontalSectionGroups.push(sectionGroup);

  return (
    <div id="top" className="scrollspy">
      {canvas?.titleArea && (
        <TitleAreaComponent titelArea={canvas?.titleArea} debug={debug} />
      )}
      {heroSection && (
        <SectionHorizontal section={heroSection} debug={debug} key={"x"} />
      )}
      <div className="flex container">
        <div className="flex grow">
          <div className="grow">
            {horisontalSectionGroups.map((sectionGroup, index) => {
              return (
                <div key={index} className="min-h-screen">
                  {sectionGroup.sections.map((section) => (
                    <SectionHorizontal
                      key={section.id}
                      section={section}
                      debug={debug}
                    />
                  ))}
                </div>
              );
            })}
          </div>
          <div>
            {canvas?.canvasLayout.verticalSection && (
              <SectionVertical
                section={canvas.canvasLayout.verticalSection}
                debug={debug}
              />
            )}
          </div>
        </div>
        {links.length > 0 && (
          <div className="relative  bg-white">
            <div className="m-4 mt-8 border-l  border-[#123123] sticky top-24  hidden lg:block text-white">
              <div className="m-4 p-4  pt-10  min-w-64 ">
                {/* <ScrollSpy activeClass="nav-active"> */}
                {/* <div className="mb-4 text-black">On this page</div> */}
                <PageNavigator
                  links={links}
                  linkClassname="ml-2 pt-1 text-nowrap whitespace-nowrap text-white hover:underline  text-black"
                />
                {/* </ScrollSpy> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
