"use client";
import { ca } from "date-fns/locale";
import { ICanvas } from "../schema/canvas";
import SectionHorizontal from "./section-horizontal";
import SectionVertical from "./section-vertical";
import TitleAreaComponent from "./titlearea";
import { LinkItem } from "./topnav";
import ScrollSpy from "react-scrollspy-navigation";

export type CanvasProps = {
  debug?: boolean;
  canvas: ICanvas;
  links: LinkItem[];
};
export default function Canvas(props: CanvasProps) {
  const { canvas, debug } = props;
  const links = props.links.map((link) => {
    return (
      <div key={link.href}>
        <a href={link.href} key={link.href} className="ml-2 pt-1 text-nowrap">
          {link.title}
        </a>
      </div>
    );
  });
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
          <div className="relative">
            <div className="sticky top-24 right-0">
              <div className="m-4 p-4 mt-14 pt-10 border rounded-md  hidden lg:block bg-slate-100 ">
                <ScrollSpy activeClass="nav-active">
                  <div className="mb-4">On this page</div>
                  {links}
                </ScrollSpy>
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
