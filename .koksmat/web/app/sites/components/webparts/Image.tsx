import Image from "next/image";

export interface ImageCoreProps {
  debug?: boolean;
  file: string;
  resizeCoefficient?: number;
  width: number;
  height: number;
  alt: string;
}

export default function ImageCore(props: ImageCoreProps) {
  const { debug, file, resizeCoefficient, width, height, alt } = props;
  return (
    <div
    // style={{
    //   background: "url('" + file + "')",
    //   backgroundPosition: "center",
    //   backgroundSize: "cover",
    // }}
    >
      <Image
        width={width * (resizeCoefficient ?? 1)}
        height={height * (resizeCoefficient ?? 1)}
        src={file}
        alt={alt}
      />

      {debug && <pre>{file}</pre>}
    </div>
  );
}