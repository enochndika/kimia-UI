import { Header } from "./header";
import { Footer } from "./footer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
