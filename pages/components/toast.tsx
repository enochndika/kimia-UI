import Head from 'next/head';
import { Container } from '@/website/components/container';
import SuccessToast from '@/packages/toast/examples/successToast';
import InfoToast from '@/packages/toast/examples/infoToast';
import DangerToast from '@/packages/toast/examples/dangerToast';
import WarningToast from '@/packages/toast/examples/warningToast';
import SuccessToastSnippet from '@/packages/toast/snippets/success.mdx';
import InfoToastSnippet from '@/packages/toast/snippets/info.mdx';
import DangerToastSnippet from '@/packages/toast/snippets/danger.mdx';
import WarningToastSnippet from '@/packages/toast/snippets/warning.mdx';

export default function ToastPage() {
  return (
    <>
      <Head>
        <title>Toast</title>
        <meta
          name="description"
          content="Kimia-ui toast component is a feedback message which are displayed after specific actions preceded by the user"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/toast"
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
