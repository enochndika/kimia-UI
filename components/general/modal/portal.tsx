import { useRef, useEffect, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  selector: string;
  children: ReactNode;
}
export default function Portal({ children, selector }: Props) {
  const ref = useRef<HTMLDivElement>();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
}
