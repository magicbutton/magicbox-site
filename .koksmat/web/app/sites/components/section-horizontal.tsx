import { de } from "date-fns/locale";
import { HorizontalSection } from "../schema/canvas";
import WebpartWrapper from "./webpart-wrapper";
import { getIdFromText, sectionHeaderAnchor } from "../util";
import { cn } from "@/lib/utils";
import Debugger from "./debugger";

type SectionHorizontalProps = {
  debug?: boolean;
  key: string;
  section: HorizontalSection;
};

type SectionStyle = {
  className?: string;
  emphasis: string;
};

export default function SectionHorizontal(props: SectionHorizontalProps) {
  const { section, key, debug } = props;
  let sectionStyle: SectionStyle;
  let setScreenHeight: boolean = false;
  switch (section.emphasis) {
    case "soft":
      sectionStyle = {
        emphasis: "none",
        className: "bg-[#F4F4FB] text-[black] p-4",
      };
      break;
    case "neutral":
      sectionStyle = {
        emphasis: "none",
        className: "bg-[#f0f0f0] text-[black]  p-4",
      };
      break;
    case "strong":
      sectionStyle = {
        emphasis: "none",
        className: "bg-white text-[black]   p-4",
        // className: "bg-[#2D32AA] text-[white] py-10",
      };
      break;
    default:
      sectionStyle = {
        emphasis: "none",
        className: "bg-[white] text-[black]  p-4",
      };
      break;
      break;
  }
  let gridClassname = "grid-cols-3";
  let leftClassname = "w-full md:w-1/3";
  let rightClassname = "w-full md:w-2/3";
  switch (section.layout) {
    case "oneColumn":
      gridClassname = " grid grid-cols-1 gap-4 ";
      break;
    case "twoColumns":
      gridClassname = "grid grid-cols-1 gap-4 grid-cols-1 md:grid-cols-2";
      break;
    case "threeColumns":
      gridClassname = "grid grid-cols-1 gap-4 grid-cols-1  lg:grid-cols-3";
      break;
    case "oneThirdLeftColumn":
      gridClassname = " md:flex  gap-4  ";
      leftClassname = "w-full md:w-1/3";
      rightClassname = "w-full md:w-2/3";
      break;
    case "oneThirdRightColumn":
      gridClassname = " md:flex  gap-4  ";
      leftClassname = "w-full md:w-2/3";
      rightClassname = "w-full md:w-1/3";
      break;
    case "fullWidth":
      gridClassname = " grid grid-cols-1 gap-4";
      sectionStyle = {
        emphasis: "none",
        className: "bg-[white] text-[black] pt-10",
      };
      break;
    default:
      gridClassname = " grid grid-cols-1 gap-4";
      break;
  }

  const anchorId = sectionHeaderAnchor(
    section.emphasis,
    section.columns[0].webparts[0]
  );
  let sectionComponent = null;

  switch (section.layout) {
    case "oneThirdLeftColumn":
    case "oneThirdRightColumn":
      sectionComponent = (
        <div className={sectionStyle.className}>
          <div className={gridClassname}>
            <div className={leftClassname}>
              {section.columns[0].webparts.map((webpart, index) => {
                return (
                  <div key={webpart.id}>
                    <WebpartWrapper webpart={webpart} debug={debug} />
                  </div>
                );
              })}
            </div>
            <div className={rightClassname}>
              {section.columns[1].webparts.map((webpart, index) => {
                return (
                  <div key={webpart.id}>
                    <WebpartWrapper webpart={webpart} debug={debug} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
      break;
    case "oneThirdRightColumn":
      sectionComponent = (
        <div className={sectionStyle.className}>
          <div className={gridClassname}>
            <div>
              {section.columns[0].webparts.map((webpart, index) => {
                return (
                  <div key={webpart.id}>
                    <WebpartWrapper webpart={webpart} debug={debug} />
                  </div>
                );
              })}
            </div>
            <div>
              {section.columns[1].webparts.map((webpart, index) => {
                return (
                  <div key={webpart.id}>
                    <WebpartWrapper webpart={webpart} debug={debug} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
      break;
    default:
      sectionComponent = (
        <div className={sectionStyle.className}>
          <div className={gridClassname}>
            {section.columns.map((column) => {
              return (
                <div key={column.id} className=" ">
                  {column.webparts.map((webpart, index) => {
                    return (
                      <div key={webpart.id}>
                        <WebpartWrapper webpart={webpart} debug={debug} />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      );
      break;
  }
  return (
    <div>
      <div
        key={key}
        id={getIdFromText(anchorId)}
        className={anchorId ? "scrollspy" : ""}
      >
        <div className={anchorId ? "h-[70px]" : ""}>&nbsp;</div>
        <div>
          {sectionComponent}
          <Debugger
            debug={debug ?? false}
            debugData={{
              ...section,
              columns: "...hidden",
            }}
          />
        </div>
      </div>
    </div>
  );
}
