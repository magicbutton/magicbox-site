export interface ICanvas {
  "@odata.context": string;
  "@odata.etag": string;
  createdDateTime: string;
  description: string;
  eTag: string;
  id: string;
  lastModifiedDateTime: string;
  name: string;
  webUrl: string;
  title: string;
  pageLayout: string;
  thumbnailWebUrl: string;
  promotionKind: string;
  showComments: boolean;
  showRecommendedPages: boolean;
  contentType: ContentType;
  createdBy: CreatedBy;
  lastModifiedBy: LastModifiedBy;
  parentReference: ParentReference;
  publishingState: PublishingState;
  reactions: Reactions;
  titleArea?: TitleArea;
  "canvasLayout@odata.context": string;
  canvasLayout: CanvasLayout;
}

export interface ContentType {
  id: string;
  name: string;
}

export interface CreatedBy {
  user: User;
}

export interface User {
  displayName: string;
  email?: string;
}

export interface LastModifiedBy {
  user: User2;
}

export interface User2 {
  displayName: string;
  email: string;
}

export interface ParentReference {
  siteId: string;
}

export interface PublishingState {
  level: string;
  versionId: string;
}

export interface Reactions {}

export interface TitleArea {
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
  isDecorative: boolean;
  hasTitleBeenCommitted: boolean;
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

export interface Value {}

export interface CanvasLayout {
  "horizontalSections@odata.context": string;
  horizontalSections: HorizontalSection[];
  "verticalSection@odata.context"?: string;
  verticalSection?: VerticalSection;
}

export interface HorizontalSection {
  layout: string;
  id: string;
  emphasis: string;
  "columns@odata.context": string;
  columns: Column[];
}

export interface Column {
  id: string;
  width: number;
  "webparts@odata.context": string;
  webparts: Webpart[];
}

export interface Webpart {
  "@odata.type": string;
  id: string;
  innerHtml?: string;
  webPartType?: string;
  data?: Data;
}

export interface Data {
  audiences: any[];
  dataVersion: string;
  description: string;
  title: string;
  properties: Properties;
  serverProcessedContent: ServerProcessedContent2;
}

export interface Properties {
  description?: string;
  script?: string;
  annotation?: string;
  authorName?: string;
  chartitem?: string;
  endrange?: string;
  excelSettingsType?: string;
  file?: string;
  listId?: string;
  photoUrl?: string;
  rangeitem?: string;
  siteId?: string;
  startPage?: number;
  startrange?: string;
  tableitem?: string;
  uniqueId?: string;
  wdallowinteractivity?: boolean;
  wdhidegridlines?: boolean;
  wdhideheaders?: boolean;
  webId?: string;
  webAbsoluteUrl?: string;
  imageSourceType?: number;
  captionText?: string;
  altText?: string;
  linkUrl?: string;
  overlayText?: string;
  fileName?: string;
  imgWidth?: number;
  imgHeight?: number;
  isOverlayTextVisible?: boolean;
  alignment?: string;
  fixAspectRatio?: boolean;
  advancedImageEditorData?: AdvancedImageEditorData;
  overlayTextStyles?: OverlayTextStyles;
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

export interface ServerProcessedContent2 {
  htmlStrings: any[];
  searchablePlainTexts: SearchablePlainText[];
  links: Link[];
  imageSources: ImageSource2[];
  customMetadata?: CustomMetadaum2[];
}

export interface SearchablePlainText {
  key: string;
  value: string;
}

export interface Link {
  key: string;
  value: string;
}

export interface ImageSource2 {
  key: string;
  value: string;
}

export interface CustomMetadaum2 {
  key: string;
  value: Value2;
}

export interface Value2 {
  siteid: string;
  webid: string;
  listid: string;
  uniqueid: string;
  width: string;
  height: string;
}

export interface VerticalSection {
  emphasis: string;
  "webparts@odata.context": string;
  webparts: Webpart[];
}
