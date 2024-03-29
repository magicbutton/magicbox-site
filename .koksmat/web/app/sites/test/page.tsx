import Canvas from "@/app/sites/components/canvas";
import p from "./page.json";

export default function Page() {
  return (
    <div className="container">
      <Canvas canvas={p} />
    </div>
  );
}
