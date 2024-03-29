import Image from "next/image";

export interface ImageWebPartProps {
  debug?: boolean;
  data: Data | undefined;
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
  imageSourceType: number;
  captionText: string;
  altText: string;
  linkUrl: string;
  overlayText: string;
  fileName: string;
  siteId: string;
  webId: string;
  listId: string;
  uniqueId: string;
  imgWidth: number;
  imgHeight: number;
  isOverlayTextVisible: boolean;
  alignment: string;
  fixAspectRatio: boolean;
  advancedImageEditorData: AdvancedImageEditorData;
  overlayTextStyles: OverlayTextStyles;
}

export interface AdvancedImageEditorData {
  "@odata.type": string;
  isAdvancedEdited: boolean;
}

export interface OverlayTextStyles {
  "@odata.type": string;
  textColor: string;
  isBold: boolean;
  isItalic: boolean;
  textBoxColor: string;
  textBoxOpacity: number;
  overlayColor: string;
  overlayTransparency: number;
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
  siteid: string;
  webid: string;
  listid: string;
  uniqueid: string;
  width: string;
  height: string;
}

export default function ImageWebPart(props: ImageWebPartProps) {
  const { debug } = props;
  const file = props.data?.serverProcessedContent.imageSources[0].value ?? "";
  const width = props.data?.properties.imgWidth;
  const height = props.data?.properties.imgHeight;
  const alt = props.data?.properties.altText ?? "";
  return (
    <div
    // style={{
    //   background: "url('" + file + "')",
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    // }}
    >
      <Image width={width} height={height} src={file} alt={alt} />

      {debug && <pre>{file}</pre>}
    </div>
  );
}
