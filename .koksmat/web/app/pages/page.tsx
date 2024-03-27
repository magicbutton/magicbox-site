/* eslint-disable @next/next/no-img-element */
"use client";
import { useContext, useEffect, useState } from "react";
import { loadTemplate } from "./server";
import { PnpClientSidePage, Root } from "./template_schema";
import { Hero, Text } from "./schemas";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { KoksmatContext } from "@/koksmat/contextdefinition";
// https://365admin.blob.core.windows.net/sites/magic365/home/SiteAssets/SitePages/Home/374825601priscilla-du-preez-XkKCui44iM0-unsplash.jpg

function translateImageUrl(url: string) {
  return url
    .replace(
      "https://{fqdn}{site}/",
      "https://365admin.blob.core.windows.net/sites/magic365/home/"
    )
    .replace(
      "{site}/",
      "https://365admin.blob.core.windows.net/sites/magic365/home/"
    );
}

function HeroWebPart(props: { webpartData: any }) {
  const { webpartData } = props;
  const koksmat = useContext(KoksmatContext);
  const data: Hero = JSON.parse(webpartData["@_JsonControlData"]);
  const numberOfItems = data.properties.layout;
  // return <div>Hero</div>
  return (
    <div>
      {data.properties.content
        .filter((content, ix) => ix < numberOfItems)
        .map((content, key) => {
          let img = translateImageUrl(content.image?.resolvedUrl ?? "");
          if (!img) {
            img = content.image?.imageUrl ?? "";
          }
          const factor = content.image?.widthFactor ?? 1;
          let title = "";
          let cta = "";
          let isEven = key % 2 === 0;
          const searchablePlainTexts = data.serverProcessedContent
            .searchablePlainTexts as any;
          switch (key) {
            case 0:
              title = searchablePlainTexts["content[0].title"];
              cta = searchablePlainTexts["content[0].callToActionText"];
              break;
            case 1:
              title = searchablePlainTexts["content[1].title"];
              cta = searchablePlainTexts["content[1].callToActionText"];
              break;
            case 2:
              title = searchablePlainTexts["content[2].title"];
              cta = searchablePlainTexts["content[2].callToActionText"];
              break;
            case 3:
              title = searchablePlainTexts["content[3].title"];
              cta = searchablePlainTexts["content[3].callToActionText"];
              break;
            case 4:
              title = searchablePlainTexts["content[4].title"];
              cta = searchablePlainTexts["content[4].callToActionText"];
              break;

            default:
              break;
          }
          let render = null;
          if (factor === 1) {
            render = (
              <div className="relative">
                <img src={img} alt={content.alternateText} />
                {content.showCallToAction && (
                  <div className="absolute left-10 top-2/3 z-10 text-2xl font-bold text-white">
                    {title}
                  </div>
                )}
                {content.showCallToAction && (
                  <div className="absolute bottom-10 left-10 z-10 text-lg text-white">
                    <Link href="/profile" className="cursor-pointer">
                      {" "}
                      {cta}
                    </Link>
                  </div>
                )}
              </div>
            );
          } else {
            render = (
              <div
                className={
                  !isEven ? "flex flex-row-reverse" : " flex  flex-row"
                }
              >
                <div
                  className={cn("w-2/3 ")}
                  style={{
                    background: "url('" + img + "')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>
                <div className="w-1/3 p-10">
                  {content.showFeatureText && (
                    <span className="text bg-[#3F7288] px-3 py-1 text-sm uppercase  text-white">
                      {content.featureText}
                    </span>
                  )}
                  <div className=" left-10 top-2/3 z-10 py-3 text-2xl font-bold">
                    {title}
                  </div>
                  {content.showDescription && (
                    <div className="text py-3">{content.description}</div>
                  )}

                  {content.showCallToAction && (
                    <div className=" bottom-10 left-10 z-10 py-3 text-lg">
                      {cta}
                    </div>
                  )}
                </div>
              </div>
            );
          }

          return <div key={key}>{render}</div>;
        })}
    </div>
  );
}

function TextWebPart(props: { webpartData: any }) {
  const { webpartData } = props;
  const koksmat = useContext(KoksmatContext);
  const data: Text = webpartData;

  const html =
    data["pnp:CanvasControlProperties"]["pnp:CanvasControlProperty"]["@_Value"];
  return (
    <div>
      {/* <div>Text</div> */}
      <div>
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </div>
      {/* <textarea value={JSON.stringify(webpartData,null,2)}> </textarea>  */}
      {/* <pre>{JSON.stringify(webpartData,null,2)} </pre> */}
    </div>
  );
}

function Webpart(props: { webpartData: any }) {
  const webpartType = props.webpartData["@_WebPartType"];
  const koksmat = useContext(KoksmatContext);
  switch (webpartType) {
    case "Hero":
      return <HeroWebPart webpartData={props.webpartData} />;
      break;
    case "Text":
      return <TextWebPart webpartData={props.webpartData} />;
      break;
    default:
      break;
  }

  return (
    <div>
      <div>
        <div>Unsupported Webpart: {webpartType}</div>
        <pre>{JSON.stringify(props.webpartData, null, 2)} </pre>
      </div>
    </div>
  );
}
function CanvasControl(props: { webpartData: any }) {
  const { webpartData } = props;
  const controls = Array.isArray(webpartData["pnp:CanvasControl"])
    ? webpartData["pnp:CanvasControl"]
    : [webpartData["pnp:CanvasControl"]];

  return (
    <div className="flex">
      {controls.map((control, key) => {
        return (
          <div key={key}>
            <Webpart webpartData={control} />
          </div>
        );
      })}
    </div>
  );
}

function Section(section: any) {
  return <div></div>;
}
export default function HomePage() {
  const koksmat = useContext(KoksmatContext);
  const [pages, setpages] = useState<PnpClientSidePage[]>();
  const [template, settemplate] = useState<Root>();
  useEffect(() => {
    (async () => {
      const template = await loadTemplate();
      const pages: PnpClientSidePage[] = [
        template["pnp:Provisioning"]["pnp:Templates"][
          "pnp:ProvisioningTemplate"
        ]["pnp:ClientSidePages"]["pnp:ClientSidePage"],
      ];
      setpages(pages);
      settemplate(template);
    })();
  }, []);

  return (
    <div className="container">
      {pages &&
        pages.map((page, key) => {
          return (
            <div key={key}>
              {page["pnp:Sections"]["pnp:Section"]
                .sort((a, b) => {
                  const a1 = parseInt(a["@_Order"]);
                  const b1 = parseInt(b["@_Order"]);
                  return a1 - b1;
                })
                .map((section, key) => {
                  return (
                    <div key={key} className="pb-10">
                      {/* Section: */}
                      <CanvasControl webpartData={section["pnp:Controls"]} />
                    </div>
                  );
                })}
            </div>
          );
        })}
    </div>
  );
}
