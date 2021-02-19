import toast from "./toast";

const SuccessToast = () => (
  <>
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-12 mb-4">
      Success
    </h2>
    <div className="space-x-1 mb-4 md:space-x-6 space-y-3">
      <button
        onClick={() => toast.success("Your message...", "topLeft")}
        className="bg-green-700 text-white focus:outline-none rounded px-6 py-2 font-medium"
      >
        Top Left
      </button>
      <button
        onClick={() => toast.success("Your message...", "topRight")}
        className="bg-green-700 text-white focus:outline-none rounded px-6 py-2 font-medium"
      >
        Top Right
      </button>
      <button
        onClick={() => toast.success("Your message...", "bottomLeft")}
        className="bg-green-700 text-white focus:outline-none rounded px-6 py-2 font-medium"
      >
        Bottom Left
      </button>
      <button
        onClick={() => toast.success("Your message...", "bottomRight")}
        className="bg-green-700 text-white focus:outline-none rounded px-6 py-2 font-medium"
      >
        Bottom Right
      </button>
    </div>
  </>
);

export default SuccessToast;
