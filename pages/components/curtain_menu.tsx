import Head from "next/head";
import { Container } from "../../site/container";
import {
  CurtainMenuLeft,
  CurtainMenuTop,
} from "../../components/navigation/curtain_menu";
import MobileLayout from "../../site/layout/mobile";

export default function CurtainMenuPage() {
  return (
    <>
      <Head>
        <title>Curtain Menu</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Curtain Menu
        </h1>
        <CurtainMenuLeft />
        <CurtainMenuTop />
      </Container>
    </>
  );
}

CurtainMenuPage.Layout = MobileLayout;