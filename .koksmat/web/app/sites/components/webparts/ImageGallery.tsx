"use client";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "../embla/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

export interface ImageGalleryWebPartProps {
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
  layout: number;
  imageSourceType: number;
  isRecursive: boolean;
  isCdnEnabledForList: boolean;
  hasDynamicModeEnabled: boolean;
  maxImagesCount: number;
  canAlwaysSelectDocLibAsSource: boolean;
  gridSettings: GridSettings;
  carouselSettings: CarouselSettings;
  "images@odata.type": string;
  images: Image[];
}

export interface GridSettings {
  "@odata.type": string;
  imageSize: number;
  imageCropping: number;
  imageAspectRatio: number;
  lightbox: boolean;
}

export interface CarouselSettings {
  "@odata.type": string;
  autoplay: boolean;
  autoplaySpeed: number;
  dots: boolean;
  lazyLoad: boolean;
  metadata: boolean;
  swipe: boolean;
}

export interface Image {
  description: string;
  siteId: string;
  webId: string;
  listId: string;
  id: string;
  isInList: boolean;
  altText: string;
  minCanvasWidth?: number;
}

export interface ServerProcessedContent {
  htmlStrings: any[];
  searchablePlainTexts: any[];
  links: any[];
  imageSources: ImageSource[];
  componentDependencies: ComponentDependency[];
  customMetadata: CustomMetadaum[];
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
  mincanvaswidth?: string;
}

export default function ImageGalleryWebPart(props: ImageGalleryWebPartProps) {
  const { debug, data } = props;
  const OPTIONS: EmblaOptionsType = {};
  const SLIDE_COUNT = 5;
  //const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const SLIDES = data.serverProcessedContent.imageSources.map((item, index) => {
    return item.value;
  });

  return (
    <div className="flex ">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      {debug && <pre>{JSON.stringify(props, null, 2)}</pre>}
    </div>
  );
}
