import Head from "next/head";
import { Container } from "../../site/container";
import MobileLayout from "../../site/layout/mobile";
import SuccessToast from "../../components/extra/toast/successToast";
import InfoToast from "../../components/extra/toast/infoToast";
import DangerToast from "../../components/extra/toast/dangerToast";
import WarningToast from "../../components/extra/toast/warningToast";

export default function ToastPage() {
  return (
    <>
      <Head>
        <title>Toast</title>
        <meta
          name="description"
          content="Kimia-ui toast component is a feedback message which are displayed after specific actions preceded by the user"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Toast
        </h1>
        <SuccessToast />
        <InfoToast />
        <DangerToast />
        <WarningToast />
      </Container>
    </>
  );
}

ToastPage.Layout = MobileLayout;
