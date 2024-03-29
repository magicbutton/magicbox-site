import Canvas from "@/app/sites/components/canvas";
import p from "/Users/nielsgregersjohansen/kitchens/magicbox-site/.koksmat/web/app/sites/data/sites/welcome-to-nexi/page.json";

export default function Page() {
  return (
    <div>
      <Canvas canvas={p as any} />
    </div>
  );
}
