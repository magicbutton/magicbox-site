export interface DebuggerProps {
  debug: boolean;
  debugData: any;
}
export default function Debugger(props: DebuggerProps) {
  const { debug, debugData } = props;
  if (!debug) return null;
  return (
    <div className="bg-[#F4F4FB] text-[black] p-4 border rounded-xl shadow-md">
      <textarea className="w-max" style={{ width: "100%" }}>
        {JSON.stringify(debugData, null, 2)}
      </textarea>
    </div>
  );
}
