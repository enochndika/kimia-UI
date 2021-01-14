import Head from "next/head";
import DefaultButtons from "../components/general/button/defaultButton";
import { HamburgerMenuVariantOne } from "../components/navigation/hamburger_menu/variantOne";
import { HamburgerMenuTwo } from "../components/navigation/hamburger_menu/variantTwo";
import { HamburgerMenuVariantThree } from "../components/navigation/hamburger_menu/variantThree";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimia-UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultButtons />
      <HamburgerMenuVariantOne />
      <HamburgerMenuTwo />
      <HamburgerMenuVariantThree />
    </>
  );
}
