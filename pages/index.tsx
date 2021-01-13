import Head from "next/head";
import DefaultButtons from "../components/general/button/defaultButton";
import {
  LargeSpinnerComponent,
  SpinnerComponent,
} from "../components/general/spinner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimia-UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultButtons />
      <SpinnerComponent />
      <LargeSpinnerComponent />
    </>
  );
}
