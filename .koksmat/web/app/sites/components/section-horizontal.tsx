import { HorizontalSection } from "../schema/canvas";
import WebpartWrapper from "./webpart-wrapper";

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
  switch (section.emphasis) {
    case "soft":
      sectionStyle = {
        emphasis: "none",
        className: "bg-[#F4F4FB] text-[black] py-10",
      };
      break;
    case "neutral":
      sectionStyle = {
        emphasis: "none",
        className: "bg-[#f0f0f0] text-[black] py-10",
      };
      break;
    case "strong":
      sectionStyle = {
        emphasis: "none",

        className: "bg-[#2D32AA] text-[white] py-10",
      };
      break;
    default:
      sectionStyle = {
        emphasis: "none",
        className: "bg-[white] text-[black] py-10",
      };
      break;
      break;
  }
  let gridClassname = "grid-cols-3";
  switch (section.layout) {
    case "oneColumn":
      gridClassname = "container grid grid-cols-1 gap-4 ";
      break;
    case "twoColumns":
      gridClassname =
        "container grid grid-cols-1 gap-4 grid-cols-1 md:grid-cols-2";
      break;
    case "threeColumns":
      gridClassname =
        "container grid grid-cols-1 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      break;
    default:
      gridClassname = "container grid grid-cols-1 gap-4";
      break;
  }

  return (
    <div key={key}>
      <div className={sectionStyle.className}>
        <div className={gridClassname}>
          {section.columns.map((column) => {
            return (
              <div key={column.id} className=" ">
                {column.webparts.map((webpart) => {
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
    </div>
  );
}
