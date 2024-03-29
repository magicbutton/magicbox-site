import Canvas from "@/app/sites/components/canvas";
import p from "./page.json";

export default function Page() {
  return (
    <div>
      <Canvas canvas={p as any} />
    </div>
  );
}
