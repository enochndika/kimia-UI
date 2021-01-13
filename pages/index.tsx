import Head from "next/head";
import DefaultButtons from "../components/general/button/defaultButton";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimia-UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultButtons />
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-12 mb-6">
        Variant 1
      </h2>
    </>
  );
}
