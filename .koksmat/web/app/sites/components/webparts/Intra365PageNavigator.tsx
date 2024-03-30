export interface Intra365PageNavigatorWebPartProps {
  data: Data | undefined;
  debug?: boolean;
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
  script: string;
}

export interface ServerProcessedContent {
  htmlStrings: any[];
  searchablePlainTexts: any[];
  links: any[];
  imageSources: any[];
}

export default function Intra365PageNavigatorWebPart(
  props: Intra365PageNavigatorWebPartProps
) {
  const file = props.data?.serverProcessedContent.links.find(
    (link) => link.key === "serverRelativeUrl"
  )?.value;
  return (
    <div>
      <h1>Intra365PageNavigator</h1>
    </div>
  );
}
