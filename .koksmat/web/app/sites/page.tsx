import Canvas from "./components/canvas";
import p from "/Users/nielsgregersjohansen/kitchens/magicbox-site/.koksmat/testdata/page.json";

export default function Page() {
  return (
    <div>
      <Canvas canvas={p} debug={true} />
    </div>
  );
}
