import Image from "next/image";
import Debugger from "../debugger";

export interface Root {
  enableGradientEffect: boolean;
  imageWebUrl: string;
  layout: string;
  showAuthor: boolean;
  showPublishedDate: boolean;
  showTextBlockAboveTitle: boolean;
  textAboveTitle: string;
  textAlignment: string;
  imageSourceType: number;
  title: string;
  "authorByline@odata.type": string;
  authorByline: string[];
  altText: string;
  webId: string;
  siteId: string;
  listId: string;
  uniqueId: string;
  translateX: number;
  translateY: number;
  imgHeight: number;
  imgWidth: number;
  "authors@odata.type": string;
  authors: Author[];
  serverProcessedContent: ServerProcessedContent;
}

export interface Author {
  id: string;
  upn: string;
  email: string;
  name: string;
  role: string;
}

export interface ServerProcessedContent {
  htmlStrings: any[];
  searchablePlainTexts: any[];
  links: any[];
  imageSources: ImageSource[];
  customMetadata: CustomMetadaum[];
}

export interface ImageSource {
  key: string;
  value: string;
}

export interface CustomMetadaum {
  key: string;
  value: Value;
}

export interface Value {
  siteId: string;
  webId: string;
  listId: string;
  uniqueId: string;
  width: number;
  height: number;
}

export type OverlapProps = {
  debug?: boolean;
  titleArea: Root | undefined;
};

export default function Overlap(props: OverlapProps) {
  const { debug, titleArea } = props;
  const file = titleArea?.imageWebUrl ?? "";
  const width = "100%"; //titleArea?.imgWidth;
  const height = titleArea?.imgHeight;
  const alt = titleArea?.altText ?? "";
  return (
    <div
    // style={{
    //   background: "url('" + file + "')",
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    // }}
    >
      <div className="relative">
        <img className="w-[100%] h-48 object-cover" src={file} alt={alt} />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">{titleArea?.title}</h1>
        </div>
      </div>
      <Debugger debug={debug ?? false} debugData={file} />
    </div>
  );
}
