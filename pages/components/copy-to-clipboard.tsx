import Head from 'next/head';
import { Container } from '@/website/components/container';
import DefaultCopyToClipboard from '@/packages/useClipboard/examples/default';
import DefaultCopyToClipboardSnippet from '@/packages/useClipboard/snippets/default.mdx';
import Table from '@/website/components/table';

export default function CopyToClipboardPage() {
  return (
    <>
      <Head>
        <title>Copy to clipboard</title>
        <meta
          name="description"
          content="Kimia-ui Copy to clipboard custom hook component allows you to copy text"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/copy-to-clipboard"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Copy to clipboard
        </h1>
        <h2 className="font-bold text-gray-700 text-lg md:text-2xl mb-12">
          Usage and props
        </h2>
        <Table name="copyToClipboard" />
        <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-12 mb-3">
          example
        </h2>
        <DefaultCopyToClipboard />
        <DefaultCopyToClipboardSnippet />
      </Container>
    </>
  );
}
