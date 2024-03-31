import { ca } from "date-fns/locale";
import { ICanvas } from "../schema/canvas";
import SectionHorizontal from "./section-horizontal";
import SectionVertical from "./section-vertical";
import TitleAreaComponent from "./titlearea";

export type CanvasProps = {
  debug?: boolean;
  canvas: ICanvas;
};
export default function Canvas(props: CanvasProps) {
  const { canvas, debug } = props;
  return (
    <div>
      {canvas?.titleArea && (
        <TitleAreaComponent titelArea={canvas?.titleArea} debug={debug} />
      )}
      <div className="flex">
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
      <div className="text-sm">
        {canvas.lastModifiedBy.user.displayName} | {canvas.lastModifiedDateTime}
      </div>
    </div>
  );
}
