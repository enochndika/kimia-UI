import toast from "./toast";

const DangerToast = () => (
  <>
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-20 mb-4">
      Danger
    </h2>
    <div className="space-x-1 mb-4 md:space-x-6 space-y-3">
      <button
        onClick={() => toast.danger("Your message...", "topLeft")}
        className="bg-red-500 text-white focus:outline-none rounded px-6 py-2 font-medium"
      >
        Top Left
      </button>
      <button
        onClick={() => toast.danger("Your message...", "topRight")}
        className="bg-red-500 text-white focus:outline-none rounded px-6 py-2 font-medium"
      >
        Top Right
      </button>
      <button
        onClick={() => toast.danger("Your message...", "bottomLeft")}
        className="bg-red-500 text-white focus:outline-none rounded px-6 py-2 font-medium"
      >
        Bottom Left
      </button>
      <button
        onClick={() => toast.danger("Your message...", "bottomRight")}
        className="bg-red-500 text-white focus:outline-none rounded px-6 py-2 font-medium"
      >
        Bottom Right
      </button>
    </div>
  </>
);

export default DangerToast;
