import { Webpart } from "../schema/canvas";
import { fixHtml, sectionHeaderAnchor } from "../util";
import Debugger from "./debugger";
import FileViewerWebPart from "./webparts/FileViewerWebPart";
import HeroWebPart from "./webparts/HeroWebpart";
import ImageGalleryWebPart from "./webparts/ImageGallery";
import ImageWebPart from "./webparts/ImageWebPart";
import Intra365PageNavigatorWebPart from "./webparts/Intra365PageNavigator";
import QuickLinksWebPart from "./webparts/QuickLinksWebPart";
import SharedPageWebPart from "./webparts/SharedPage";

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
          <Debugger debug={debug ?? false} debugData={webpart.innerHtml} />
        </div>
      );
      break;
    case "#microsoft.graph.standardWebPart":
      switch (webpart.webPartType) {
        case "d1d91016-032f-456d-98a4-721247c305e8": // Image
          render = <ImageWebPart data={webpart.data as any} debug={debug} />;
          break;
        case "b7dd04e1-19ce-4b24-9132-b60a1c2b910d": // File viewer
          render = (
            <FileViewerWebPart data={webpart.data as any} debug={debug} />
          );
          break;
        case "c350c624-2eb1-47f4-9e94-ba2393929b46": // Intra365 - Page Navigator
          render = <div />;
          // render = (
          //   <Intra365PageNavigatorWebPart
          //     data={webpart.data as any}
          //     debug={debug}
          //   />
          // );
          break;
        case "c70391ea-0b10-4ee9-b2b4-006d3fcad0cd": // Quick Links
          render = (
            <QuickLinksWebPart data={webpart.data as any} debug={debug} />
          );
          break;
        case "af8be689-990e-492a-81f7-ba3e4cd3ed9c": // Image Gallery
          render = (
            <ImageGalleryWebPart data={webpart.data as any} debug={debug} />
          );

          break;

        case "d13cb0a4-6bf9-4e9d-b164-90abb6a053e9": // Shared Page
          render = (
            <SharedPageWebPart data={webpart.data as any} debug={debug} />
          );
          break;
        case "c4bd7b2f-7b6e-4599-8485-16504575f590": // Hero
          render = <HeroWebPart data={webpart.data as any} debug={debug} />;
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

  return (
    <div className="">
      {render}
      <Debugger debug={debug ?? false} debugData={webpart} />
    </div>
  );
}
