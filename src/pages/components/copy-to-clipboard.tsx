import Head from 'next/head';
import { Container } from '@/website/components/container';
import DefaultCopyToClipboard from '@/packages/useClipboard/examples/default';
import DefaultCopyToClipboardSnippet from '@/packages/useClipboard/snippets/default.mdx';
import Table from '@/website/components/DocumentationTable';

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
        <h1 className="mb-16 mt-12 text-center text-gray-600 text-3xl font-bold md:text-5xl">
          Copy to clipboard
        </h1>
        <h2 className="mb-12 text-gray-700 text-lg font-bold md:text-2xl">
          Usage and props
        </h2>
        <Table name="copyToClipboard" />
        <h2 className="mb-3 mt-12 text-gray-600 text-lg font-bold md:text-2xl">
          example
        </h2>
        <DefaultCopyToClipboard />
        <DefaultCopyToClipboardSnippet />
      </Container>
    </>
  );
}
