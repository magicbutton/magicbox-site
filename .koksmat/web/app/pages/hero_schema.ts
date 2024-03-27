export interface Root {
    id: string
    instanceId: string
    title: string
    description: string
    dataVersion: string
    properties: Properties
    serverProcessedContent: ServerProcessedContent
    dynamicDataPaths: DynamicDataPaths
    dynamicDataValues: DynamicDataValues
  }
  
  export interface Properties {
    heroLayoutThreshold: number
    carouselLayoutMaxWidth: number
    layoutCategory: number
    layout: number
    content: Content[]
    useLegacyFourTileStyle: boolean
  }
  
  export interface Content {
    id: string
    type: string
    color: number
    image?: Image
 
    description: string
    showDescription: boolean
    showTitle: boolean
    alternateText: string
    imageDisplayOption: number
    isDefaultImage: boolean
    showCallToAction: boolean
    isDefaultImageLoaded: boolean
    isCustomImageLoaded: boolean
    featureText: string
    showFeatureText: boolean
    previewImage?: PreviewImage
    upperCaseCallToAction?: boolean
    title?: string
  }
  
  export interface Image {
    focalPosition?: FocalPosition
    zoomRatio: number
    siteId: string
    webId: string
    listId: string
    id: string
    resolvedUrl: string
    imageUrl: string
    minCanvasWidth: number
    widthFactor: number
  }
  
  export interface FocalPosition {
    x: number
    y: number
  }
  
  export interface PreviewImage {
    zoomRatio: number
    resolvedUrl: string
    imageUrl: string
    minCanvasWidth: number
    widthFactor?: number
  }
  
  export interface ServerProcessedContent {
    htmlStrings: HtmlStrings
    searchablePlainTexts: SearchablePlainTexts
    imageSources: ImageSources
    links: Links
    customMetadata: CustomMetadata
    componentDependencies: ComponentDependencies
  }
  
  export interface HtmlStrings {}
  
  export interface SearchablePlainTexts {
    "content[0].title": string
    "content[1].title": string
    "content[0].callToActionText": string
    "content[1].callToActionText": string
  }
  
  export interface ImageSources {
    "content[0].image.url": string
    "content[1].image.url": string
    "content[0].previewImage.url": string
    "content[1].previewImage.url": string
  }
  
  export interface Links {
    "content[0].link": string
    "content[1].link": string
    "content[0].callToActionLink": string
  }
  
  export interface CustomMetadata {
    "content[0].image.url": Content0ImageUrl
    "content[1].image.url": Content1ImageUrl
    "content[0].previewImage.url": Content0PreviewImageUrl
    "content[1].previewImage.url": Content1PreviewImageUrl
    heroLayoutComponentId: HeroLayoutComponentId
    carouselLayoutComponentId: CarouselLayoutComponentId
  }
  
  export interface Content0ImageUrl {
    siteId: string
    webId: string
    listId: string
    uniqueId: string
    renderWidthRatio: number
    renderWidthRatioThreshold: number
    minCanvasWidth: number
  }
  
  export interface Content1ImageUrl {
    siteId: string
    webId: string
    listId: string
    uniqueId: string
    renderWidthRatio: number
    renderWidthRatioThreshold: number
    minCanvasWidth: number
  }
  
  export interface Content0PreviewImageUrl {
    renderWidthRatioThreshold: number
    minCanvasWidth: number
  }
  
  export interface Content1PreviewImageUrl {
    renderWidthRatio: number
    renderWidthRatioThreshold: number
    minCanvasWidth: number
  }
  
  export interface HeroLayoutComponentId {
    minCanvasWidth: number
  }
  
  export interface CarouselLayoutComponentId {
    maxCanvasWidth: number
  }
  
  export interface ComponentDependencies {
    heroLayoutComponentId: string
    carouselLayoutComponentId: string
  }
  
  export interface DynamicDataPaths {}
  
  export interface DynamicDataValues {}
  