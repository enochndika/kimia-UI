import style from "../../styles/global.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => (
  <div className={`${style.container} container-fluid`}>{children}</div>
);
