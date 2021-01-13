import Head from "next/head";
import DefaultButtons from "../components/general/button/defaultButton";
import { ToastContainer } from "../components/extra/toast/example";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimia-UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultButtons />
      <ToastContainer />
    </>
  );
}
