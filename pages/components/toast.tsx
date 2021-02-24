import Head from 'next/head';
import { Container } from '../../website/container';
import MobileLayout from '../../website/layout/mobile';
import SuccessToast from '../../components/toast/successToast';
import InfoToast from '../../components/toast/infoToast';
import DangerToast from '../../components/toast/dangerToast';
import WarningToast from '../../components/toast/warningToast';

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
