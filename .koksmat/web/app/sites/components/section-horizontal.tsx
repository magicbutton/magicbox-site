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
        className: "bg-[#F4F4FB] text-[black]",
      };
      break;
    case "neutral":
      sectionStyle = {
        emphasis: "none",
        className: "bg-[#f0f0f0] text-[black]",
      };
      break;
    case "strong":
      sectionStyle = {
        emphasis: "none",

        className: "bg-[#2D32AA] text-[white]",
      };
      break;
    default:
      sectionStyle = {
        emphasis: "none",
        className: "bg-[white] text-[black]",
      };
      break;
      break;
  }

  return (
    <div key={key}>
      <div className={sectionStyle.className}>
        <div className="container flex py-10">
          {section.columns.map((column) => {
            return (
              <div key={column.id} className="grow ">
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
