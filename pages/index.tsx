import Head from "next/head";
import DefaultButtons from "../components/general/button/defaultButton";
import AnimateButtons from "../components/general/button/animateButton";
import RoundedButtons from "../components/general/button/RoundedButton";
import SizedButtons from "../components/general/button/SizedButton";
import DisabledButtons from "../components/general/button/disabledButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimia-UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultButtons />
      <AnimateButtons />
      <RoundedButtons />
      <SizedButtons />
      <DisabledButtons />
      <RoundedButtons />
    </>
  );
}
