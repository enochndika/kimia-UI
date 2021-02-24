import Head from 'next/head';
import { Container } from '@/website/components/container';
import MobileLayout from '../../website/layout/mobile';
import SuccessToast from '@/components/toast/examples/successToast';
import InfoToast from '@/components/toast/examples/infoToast';
import DangerToast from '@/components/toast/examples/dangerToast';
import WarningToast from '@/components/toast/examples/warningToast';
import SuccessToastSnippet from '@/website/snippets/toast/success.mdx';
import InfoToastSnippet from '@/website/snippets/toast/info.mdx';
import DangerToastSnippet from '@/website/snippets/toast/danger.mdx';
import WarningToastSnippet from '@/website/snippets/toast/warning.mdx';

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
        <SuccessToastSnippet />
        <InfoToast />
        <InfoToastSnippet />
        <DangerToast />
        <DangerToastSnippet />
        <WarningToast />
        <WarningToastSnippet />
      </Container>
    </>
  );
}

ToastPage.Layout = MobileLayout;
