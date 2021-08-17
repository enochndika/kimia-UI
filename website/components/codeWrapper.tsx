export default function CodeWrapper({ children }) {
  return (
    <div
      className="mb-20 text-white overflow-y-scroll md:mb-20"
      style={{ fontSize: 13, maxHeight: '500px' }}
    >
      <div className="relative p-0 text-left whitespace-pre font-mono box-border overflow-hidden">
        {children}
      </div>
    </div>
  );
}
