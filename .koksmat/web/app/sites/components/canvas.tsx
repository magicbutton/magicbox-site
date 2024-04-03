"use client";
import { ca } from "date-fns/locale";
import { ICanvas } from "../schema/canvas";
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
export default function Canvas(props: CanvasProps) {
  const { canvas, debug, links } = props;

  return (
    <div>
      {canvas?.titleArea && (
        <TitleAreaComponent titelArea={canvas?.titleArea} debug={debug} />
      )}
      <div className="flex">
        <div className="flex grow">
          <div className="grow">
            {canvas?.canvasLayout.horizontalSections.map((section) => {
              return (
                <SectionHorizontal
                  key={section.id}
                  section={section}
                  debug={debug}
                />
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
          <div className="relative  bg-[#2D32AA]">
            <div className="sticky top-20  hidden lg:block text-white h-screen">
              <div className="m-4 p-4 mt-14 pt-10   ">
                {/* <ScrollSpy activeClass="nav-active"> */}
                <div className="mb-4 text-white">On this page</div>
                <PageNavigator
                  links={links}
                  linkClassname="ml-2 pt-1 text-nowrap whitespace-nowrap text-white hover:underline"
                />
                {/* </ScrollSpy> */}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="text-sm p-3 ">
        Last edited by: {canvas.lastModifiedBy.user.displayName} | Date:{" "}
        {canvas.lastModifiedDateTime}
      </div>
    </div>
  );
}
