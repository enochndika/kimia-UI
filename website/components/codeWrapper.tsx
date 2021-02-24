export function CodeWrapper({ children }) {
  return (
    <div className="h-xl text-xs overflow-y-scroll text-white mb-28">
      <div className="relative text-left box-border p-0 overflow-hidden whitespace-pre font-mono">
        {children}
      </div>
    </div>
  );
}
