import Head from "next/head";
import { Container } from "../../site/container";
import MobileLayout from "../../site/layout/mobile";
import DefaultButtons from "../../components/button/defaultButton";
import AnimateButtons from "../../components/button/animateButton";
import RoundedButtons from "../../components/button/RoundedButton";
import SizedButtons from "../../components/button/SizedButton";
import DisabledButtons from "../../components/button/disabledButton";
import OutlineButtons from "../../components/button/outlineButton";

export default function ButtonPage() {
  return (
    <>
      <Head>
        <title>Buttons</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Buttons
        </h1>
        <DefaultButtons />
        <AnimateButtons />
        <RoundedButtons />
        <SizedButtons />
        <DisabledButtons />
        <OutlineButtons />
      </Container>
    </>
  );
}

ButtonPage.Layout = MobileLayout;
