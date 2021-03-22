import Head from 'next/head';
import { Container } from '@/website/components/container';
import WithoutCopyCode from '@/packages/code/examples/withoutCopy';
import DefaultCode from '@/packages/code/examples/default';
import BlackCode from '@/packages/code/examples/black';
import IndigoCode from '@/packages/code/examples/indigo';
import BlueOutlineCode from '@/packages/code/examples/blueOutline';
import DefaultCodeSnippet from '@/packages/code/snippets/default.mdx';
import BlackCodeSnippet from '@/packages/code/snippets/black.mdx';
import IndigoCodeSnippet from '@/packages/code/snippets/indigo.mdx';
import BlueOutlineCodeSnippet from '@/packages/code/snippets/blueOutline.mdx';
import WithoutCopyCodeSnippet from '@/packages/code/snippets/withoutCopy.mdx';

export default function ButtonPage() {
  return (
    <>
      <Head>
        <title>Code</title>
        <meta
          name="description"
          content="Code snippets allows to display text formatted in programming language. Kimia-UI provides many variants"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/code"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Code
        </h1>
        <DefaultCode />
        <DefaultCodeSnippet />
        <BlackCode />
        <BlackCodeSnippet />
        <IndigoCode />
        <IndigoCodeSnippet />
        <BlueOutlineCode />
        <BlueOutlineCodeSnippet />
        <WithoutCopyCode />
        <WithoutCopyCodeSnippet />
      </Container>
    </>
  );
}
