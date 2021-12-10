import { useEffect, useRef, useState } from 'react';

const Alert = () => {
  const timeOut = useRef(null);
  const [seen, setSeen] = useState(
    localStorage.getItem('info_seen') || 'false',
  );

  const onClose = () => {
    setSeen('true');
    localStorage.setItem('info_seen', 'true');
  };

  useEffect(() => {
    timeOut.current = setTimeout(() => onClose(), 12000);

    return () => {
      clearTimeout(timeOut.current);
    };
  }, []);

  return (
    <>
      {seen !== 'true' && (
        <div className="w-full bg-black py-3 fixed z-10 top-0">
          <div className="shadow text-white text-xs md:text-sm text-center px-2 md:px-0">
            Kimia-UI is now using Tailwind CSS v3, introducing some small
            changes. Please use JIT mode or update to Tailwind CSS v3
            <button onClick={onClose} className="text-2xl pl-2">
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
