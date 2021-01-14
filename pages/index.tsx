import Head from "next/head";
import DefaultButtons from "../components/general/button/defaultButton";
import { SidenavLeft } from "../components/navigation/sidenav/sidenavLeft";
import { SidenavRight } from "../components/navigation/sidenav/sidenavRight";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimia-UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultButtons />
      <SidenavLeft />
      <SidenavRight />
    </>
  );
}
