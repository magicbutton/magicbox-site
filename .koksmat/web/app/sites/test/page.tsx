import Canvas from "@/app/sites/components/canvas";
import p from "/Users/nielsgregersjohansen/kitchens/magicbox-site/.koksmat/testdata/page.json";

export default function Page() {
  return (
    <div className="container">
      <Canvas canvas={p} />
    </div>
  );
}
