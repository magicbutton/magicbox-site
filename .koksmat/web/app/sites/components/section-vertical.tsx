import { VerticalSection } from "../schema/canvas";
import WebpartWrapper from "./webpart-wrapper";

type SectionVerticalProps = {
  debug?: boolean;
  section: VerticalSection;
};
export default function SectionVertical(props: SectionVerticalProps) {
  const { section, debug } = props;
  return (
    <div>
      {section.webparts.map((webpart) => {
        return (
          <div key={webpart.id}>
            <WebpartWrapper webpart={webpart} debug={debug} />
          </div>
        );
      })}
    </div>
  );
}
