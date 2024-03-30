import { TitleArea } from "../schema/canvas";
import ColorBlock from "./titleareas/colorblock";
import Overlap from "./titleareas/overlap";

type TitleAreaProps = {
  debug?: boolean;
  titelArea: TitleArea | undefined;
};
export default function TitleAreaComponent(props: TitleAreaProps) {
  const { titelArea, debug } = props;
  if (!titelArea) {
    return null;
  }

  let render = <div></div>;
  switch (titelArea.layout) {
    case "overlap":
      render = <Overlap titleArea={titelArea as any} debug={debug} />;
      break;
    case "colorBlock": // Intra365 - Page Navigator
      render = <ColorBlock titleArea={titelArea as any} debug={debug} />;
      break;
    default:
      render = (
        <div>
          <div className="text-red-600 text-xl">
            Unknown title area type: {titelArea.layout}{" "}
          </div>
          <textarea>{JSON.stringify(titelArea, null, 2)}</textarea>
        </div>
      );
      break;
  }

  return <div className="">{render}</div>;
}
