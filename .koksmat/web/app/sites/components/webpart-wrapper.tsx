import { Webpart } from "../schema/canvas";
import { fixHtml } from "../util";
import FileViewerWebPart from "./webparts/FileViewerWebPart";
import ImageWebPart from "./webparts/ImageWebPart";
import Intra365PageNavigatorWebPart from "./webparts/Intra365PageNavigator";
import QuickLinksWebPart from "./webparts/QuickLinksWebPart";

export type WebpartProps = {
  debug?: boolean;
  webpart: Webpart;
};
export default function WebpartWrapper(props: WebpartProps) {
  const { webpart, debug } = props;
  let render = <div></div>;
  switch (webpart["@odata.type"]) {
    case "#microsoft.graph.textWebPart":
      render = (
        <div>
          <div
            dangerouslySetInnerHTML={{ __html: fixHtml(webpart.innerHtml) }}
          />
          {debug && (
            <div className="overflow-scroll max-h-screen whitespace-pre-wrap w-[509px]">
              {webpart.innerHtml}
            </div>
          )}
        </div>
      );
      break;
    case "#microsoft.graph.standardWebPart":
      switch (webpart.webPartType) {
        case "d1d91016-032f-456d-98a4-721247c305e8": // Image
          render = <ImageWebPart data={webpart.data as any} />;
          break;
        case "b7dd04e1-19ce-4b24-9132-b60a1c2b910d": // File viewer
          render = <FileViewerWebPart data={webpart.data as any} />;
          break;
        case "c350c624-2eb1-47f4-9e94-ba2393929b46": // Intra365 - Page Navigator
          render = <Intra365PageNavigatorWebPart data={webpart.data as any} />;
          break;
        case "c70391ea-0b10-4ee9-b2b4-006d3fcad0cd": // Quick Links
          render = <QuickLinksWebPart data={webpart.data as any} />;
          break;
        default:
          render = (
            <div>
              <div className="text-red-600 text-xl">
                Unknown webpart type: {webpart.webPartType}{" "}
              </div>
              <textarea>{JSON.stringify(webpart, null, 2)}</textarea>
            </div>
          );
          break;
      }
    default:
      break;
  }

  return <div>{render}</div>;
}
