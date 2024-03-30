import ImageCore from "./Image";

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
  resizeCoefficient?: number;
  resizeDesiredWidth?: number;
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
  const resizeCoefficient = props.data?.properties.resizeCoefficient ?? 1;
  const resizeDesiredWidth = props.data?.properties.resizeDesiredWidth ?? 100;
  const width = props.data?.properties.imgWidth ?? 100;
  const height = props.data?.properties.imgHeight ?? 100;
  const alt = props.data?.properties.altText ?? "";

  return (
    <div>
      <img
        src={file}
        alt={alt}
        height="auto"
        width={width * resizeCoefficient}
      />
    </div>
  );
}
