import Logo from "@/koksmat/components/logo";
import { TopNav } from "@/koksmat/components/topnav";

export default function JourneyLayoutRoot(props: {
  children: React.ReactNode;
}) {
  return <div>{props.children}</div>;
}
