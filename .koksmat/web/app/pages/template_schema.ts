export interface Root {
    "pnp:Provisioning": PnpProvisioning
  }
  
  export interface PnpProvisioning {
    "pnp:Preferences": PnpPreferences
    "pnp:Templates": PnpTemplates
    "@_xmlns:pnp": string
  }
  
  export interface PnpPreferences {
    "@_Generator": string
  }
  
  export interface PnpTemplates {
    "pnp:ProvisioningTemplate": PnpProvisioningTemplate
    "@_ID": string
  }
  
  export interface PnpProvisioningTemplate {
    "pnp:Files": PnpFiles
    "pnp:ClientSidePages": PnpClientSidePages
    "@_ID": string
    "@_Version": string
    "@_Scope": string
  }
  
  export interface PnpFiles {
    "pnp:File": PnpFile[]
  }
  
  export interface PnpFile {
    "@_Src": string
    "@_Folder": string
    "@_Overwrite": string
    "@_Level": string
  }
  
  export interface PnpClientSidePages {
    "pnp:ClientSidePage": PnpClientSidePage
  }
  
  export interface PnpClientSidePage {
    "pnp:Header": PnpHeader
    "pnp:Sections": PnpSections
    "@_PromoteAsNewsArticle": string
    "@_PromoteAsTemplate": string
    "@_Overwrite": string
    "@_Layout": string
    "@_EnableComments": string
    "@_Title": string
    "@_ThumbnailUrl": string
    "@_PageName": string
  }
  
  export interface PnpHeader {
    "@_Type": string
    "@_LayoutType": string
    "@_ShowTopicHeader": string
    "@_ShowPublishDate": string
    "@_ShowBackgroundGradient": string
    "@_TopicHeader": string
    "@_AlternativeText": string
    "@_Authors": string
    "@_AuthorByLineId": string
  }
  
  export interface PnpSections {
    "pnp:Section": PnpSection[]
  }
  
  export interface PnpSection {
    "pnp:Controls": PnpControls
    "@_Order": string
    "@_Type": string
    "@_BackgroundEmphasis"?: string
  }
  
  export interface PnpControls {
    "pnp:CanvasControl": any
  }
  