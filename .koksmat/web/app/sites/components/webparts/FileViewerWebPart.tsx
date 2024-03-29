export interface FileViewerWebPartProps {
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
  annotation: string;
  authorName: string;
  chartitem: string;
  endrange: string;
  excelSettingsType: string;
  file: string;
  listId: string;
  photoUrl: string;
  rangeitem: string;
  siteId: string;
  startPage: number;
  startrange: string;
  tableitem: string;
  uniqueId: string;
  wdallowinteractivity: boolean;
  wdhidegridlines: boolean;
  wdhideheaders: boolean;
  webId: string;
  webAbsoluteUrl: string;
}

export interface ServerProcessedContent {
  htmlStrings: any[];
  searchablePlainTexts: SearchablePlainText[];
  links: Link[];
  imageSources: any[];
}

export interface SearchablePlainText {
  key: string;
  value: string;
}

export interface Link {
  key: string;
  value: string;
}

export default function ImageFileViewerWebPart(props: FileViewerWebPartProps) {
  const { debug } = props;
  const file = props.data?.serverProcessedContent.links.find(
    (link) => link.key === "serverRelativeUrl"
  )?.value;

  const fileExtension = file?.split(".").pop()?.toLowerCase();
  switch (fileExtension) {
    case "pdf":
      return (
        <div>
          <iframe src={file} width="100%" height="100%"></iframe>
          {debug && <pre>{file}</pre>}
        </div>
      );

    case "mp4":
      return (
        <div>
          <video width={"100%"} controls>
            <source src={file} type="video/mp4" />
          </video>
        </div>
      );

    case "jpg":
    case "jpeg":
    case "png":
    case "gif":
      return (
        <div>
          <img src={file} alt="Image" />
          {debug && <pre>{file}</pre>}
        </div>
      );
  }

  return (
    <div>
      FileViewerWebPart
      <a href={file}>Download</a>
      {debug && <pre>{file}</pre>}
    </div>
  );
}
