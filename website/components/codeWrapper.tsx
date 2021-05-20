export function CodeWrapper({ children }) {
  return (
    <div
      className="overflow-y-scroll text-white mb-20 md:mb-20"
      style={{ fontSize: 13, maxHeight: '500px' }}
    >
      <div className="relative text-left box-border p-0 overflow-hidden whitespace-pre font-mono">
        {children}
      </div>
    </div>
  );
}
