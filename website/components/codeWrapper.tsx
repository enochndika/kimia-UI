export function CodeWrapper({ children }) {
  return (
    <div className="h-xl text-xs overflow-y-scroll text-white md:16 md:mb-20">
      <div className="relative text-left box-border p-0 overflow-hidden whitespace-pre font-mono">
        {children}
      </div>
    </div>
  );
}
