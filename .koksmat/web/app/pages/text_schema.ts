export interface Root {
    "pnp:CanvasControlProperties": PnpCanvasControlProperties
    "@_WebPartType": string
    "@_ControlId": string
    "@_Order": string
    "@_Column": string
  }
  
  export interface PnpCanvasControlProperties {
    "pnp:CanvasControlProperty": PnpCanvasControlProperty
  }
  
  export interface PnpCanvasControlProperty {
    "@_Key": string
    "@_Value": string
  }
  