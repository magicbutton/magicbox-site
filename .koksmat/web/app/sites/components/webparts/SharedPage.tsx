import { json } from "stream/consumers";

export interface SharedPageWebPartProps {
  debug?: boolean;
  data: Data;
}

export interface Root {
  "@odata.type": string;
  id: string;
  webPartType: string;
  data: Data;
}

export interface Data {
  audiences: any[];
  dataVersion: string;
  description: string;
  title: string;
  properties: Properties;
  serverProcessedContent: ServerProcessedContent;
}

export interface Properties {
  description: string;
  url: string;
  height: string;
  width: string;
}

export interface ServerProcessedContent {
  htmlStrings: any[];
  searchablePlainTexts: any[];
  links: any[];
  imageSources: any[];
}

export default function SharedPageWebPart(props: SharedPageWebPartProps) {
  const { debug } = props;
  const { url, height, width } = props.data.properties;
  return (
    <div className="w-full">
      <iframe
        style={{ height: height ?? "100px" }}
        allowFullScreen
        src={url}
        height={height}
        width={width}
      ></iframe>
    </div>
  );
}
