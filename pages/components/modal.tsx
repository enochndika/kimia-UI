import Head from "next/head";
import MobileLayout from "../../site/layout/mobile";
import { ModalRight } from "../../components/general/modal/modalRight";
import { ModalLeft } from "../../components/general/modal/modalLeft";
import { DefaultModal } from "../../components/general/modal/defaultModal";
import { Container } from "../../site/container";
import { ModalBackdrop } from "../../components/general/modal/backdropModal";

export default function ModalPage() {
  return (
    <>
      <Head>
        <title>Modal</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Modal
        </h1>
        <DefaultModal />
        <ModalLeft />
        <ModalRight />
        <ModalBackdrop />
      </Container>
    </>
  );
}

ModalPage.Layout = MobileLayout;
