import Head from "next/head";
import DefaultButtons from "../components/general/button/defaultButton";
import {
  JumbotronComponent,
  JumbotronWithBackgroundComponent,
} from "../components/general/jumbotron";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimia-UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultButtons />
      <JumbotronComponent />
      <JumbotronWithBackgroundComponent />
    </>
  );
}
