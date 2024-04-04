export interface HeroWebPartProps {
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
  heroLayoutThreshold: number;
  carouselLayoutMaxWidth: number;
  isFullWidth: boolean;
  layoutCategory: number;
  layout: number;
  useLegacyFourTileStyle: boolean;
  "content@odata.type": string;
  content: Content[];
}

export interface Content {
  id: string;
  type: string;
  color: number;
  description: string;
  showDescription: boolean;
  showTitle: boolean;
  alternateText: string;
  imageDisplayOption: number;
  isDefaultImage: boolean;
  showCallToAction: boolean;
  isDefaultImageLoaded: boolean;
  isCustomImageLoaded: boolean;
  showFeatureText: boolean;
  previewImage?: PreviewImage;
  image?: Image;
  title?: string;
}

export interface PreviewImage {
  "@odata.type": string;
  zoomRatio: number;
  siteId: string;
  webId: string;
  listId: string;
  id: string;
  resolvedUrl: string;
  imageUrl: string;
  widthFactor: number;
  minCanvasWidth: number;
}

export interface Image {
  "@odata.type": string;
  zoomRatio: number;
  siteId: string;
  webId: string;
  listId: string;
  id: string;
  resolvedUrl: string;
  imageUrl: string;
  minCanvasWidth: number;
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
  siteid: string;
  webid: string;
  listid: string;
  uniqueid: string;
  renderwidthratiothreshold: string;
  mincanvaswidth: string;
  renderwidthratio?: string;
}

export default function HeroWebPart(props: HeroWebPartProps) {
  const { debug } = props;
  const { content } = props.data.properties;
  const text = props.data.serverProcessedContent.searchablePlainTexts.find(
    (pair) => pair.key === "content[0].title"
  )?.value;

  return (
    <div className="w-full max-h-[300px] h-[300px]">
      {content.map((item, index) => {
        return (
          <div key={index} className="">
            <div className="relative">
              <div className="absolute  w-full ">
                <img
                  className="object-cover max-h-[300px] h-[300px] w-full bg-gradient-to-t to-transparent from-[#444444]"
                  src={item.previewImage?.resolvedUrl}
                  alt={item.alternateText}
                />
                <div className="absolute bottom-0 text-white text-4xl p-10">
                  {text}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
