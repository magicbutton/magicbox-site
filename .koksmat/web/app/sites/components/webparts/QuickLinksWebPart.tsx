export interface QuickLinksWebPartProps {
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
  isMigrated: boolean;
  layoutId: string;
  shouldShowThumbnail: boolean;
  imageWidth: number;
  hideWebPartWhenEmpty: boolean;
  dataProviderId: string;
  webId: string;
  siteId: string;
  iconPicker: string;
  imagePicker: string;
  Titel: string;
  "items@odata.type": string;
  items: Item[];
  listLayoutOptions: ListLayoutOptions;
  buttonLayoutOptions: ButtonLayoutOptions;
  waffleLayoutOptions: WaffleLayoutOptions;
}

export interface Item {
  thumbnailType: number;
  id: number;
  description: string;
  altText: string;
  rawPreviewImageMinCanvasWidth: number;
  sourceItem: SourceItem;
  image?: Image;
}

export interface SourceItem {
  "@odata.type": string;
  itemType: number;
  fileExtension: string;
  progId?: string;
  guids?: Guids;
}

export interface Guids {
  "@odata.type": string;
  siteId: string;
  webId: string;
  listId: string;
  uniqueId: string;
}

export interface Image {
  "@odata.type": string;
  imageFit: number;
  minCanvasWidth: number;
  guids: Guids2;
}

export interface Guids2 {
  "@odata.type": string;
  listId: string;
  uniqueId: string;
  webId: string;
  siteId: string;
}

export interface ListLayoutOptions {
  "@odata.type": string;
  showDescription: boolean;
  showIcon: boolean;
}

export interface ButtonLayoutOptions {
  "@odata.type": string;
  showDescription: boolean;
  buttonTreatment: number;
  iconPositionType: number;
  textAlignmentVertical: number;
  textAlignmentHorizontal: number;
  linesOfText: number;
}

export interface WaffleLayoutOptions {
  "@odata.type": string;
  iconSize: number;
  onlyShowThumbnail: boolean;
}

export interface ServerProcessedContent {
  htmlStrings: any[];
  searchablePlainTexts: SearchablePlainText[];
  links: Link[];
  imageSources: ImageSource[];
  componentDependencies: ComponentDependency[];
  customMetadata: CustomMetadaum[];
}

export interface SearchablePlainText {
  key: string;
  value: string;
}

export interface Link {
  key: string;
  value: string;
}

export interface ImageSource {
  key: string;
  value: string;
}

export interface ComponentDependency {
  key: string;
  value: string;
}

export interface CustomMetadaum {
  key: string;
  value: Value;
}

export interface Value {
  siteid?: string;
  webid?: string;
  listid?: string;
  uniqueid?: string;
  mincanvaswidth: string;
  fixedwidth: string;
}

function FilmstripItem(props: {
  item: Item;
  imageSource: string;
  text: string;
  key: number;
}) {
  const { item, imageSource, text, key } = props;
  return (
    <div className="mr-3 border" key={key}>
      <img
        className="w-80 h-48 object-cover"
        src={imageSource}
        alt={item.altText}
      />
      <div className="w-80 h-16 p-3">{text}</div>
    </div>
  );
}
export default function QuickLinksWebPart(props: QuickLinksWebPartProps) {
  const { debug, data } = props;
  const { layoutId, items } = data.properties;
  const components = items.map((item, index) => {
    const imageSource = data.serverProcessedContent.imageSources[index];
    const text = data.serverProcessedContent.searchablePlainTexts[index];
    return (
      <FilmstripItem
        key={index}
        item={item}
        imageSource={imageSource?.value}
        text={text?.value}
      />
    );
  });

  return (
    <div className="flex">
      {components.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {debug && <pre>{JSON.stringify(props, null, 2)}</pre>}
    </div>
  );
}
