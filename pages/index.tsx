import Head from "next/head";
import DefaultButtons from "../components/general/button/defaultButton";
import {
  CurtainMenuLeft,
  CurtainMenuTop,
} from "../components/navigation/curtain_menu";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimia-UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultButtons />
      <CurtainMenuTop />
      <CurtainMenuLeft />
    </>
  );
}
