import Head from "next/head";
import DefaultButtons from "../components/general/button/defaultButton";
import { NavbarVariantOne } from "../components/navigation/navbar/variantOne";
import { NavbarVariantTwo } from "../components/navigation/navbar/variantTwo";
import { NavbarVariantThree } from "../components/navigation/navbar/variantThree";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimia-UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultButtons />
      <NavbarVariantOne />
      <NavbarVariantTwo />
      <NavbarVariantThree />
    </>
  );
}
