import Head from 'next/head';
import { Container } from '@/website/components/container';
import ModalRight from '@/packages/modal/example/right';
import ModalLeft from '@/packages/modal/example/left';
import ModalTop from '@/packages/modal/example/top';
import ModalNotClosedOutside from '@/packages/modal/example/notClosedOutside';
import ModalTopSnippet from '@/packages/modal/snippets/top.mdx';
import ModalLeftSnippet from '@/packages/modal/snippets/left.mdx';
import ModalRightSnippet from '@/packages/modal/snippets/right.mdx';
import ModalNotClosedOutsideSnippet from '@/packages/modal/snippets/notClosedOutside.mdx';

export default function ModalPage() {
  return (
    <>
      <Head>
        <title>Modal</title>
        <meta
          name="description"
          content="Kimia-ui provides very powerful modal component with different positions, on top, left and right"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/modal"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Modal
        </h1>
        <ModalTop />
        <ModalTopSnippet />
        <ModalLeft />
        <ModalLeftSnippet />
        <ModalRight />
        <ModalRightSnippet />
        <ModalNotClosedOutside />
        <ModalNotClosedOutsideSnippet />
      </Container>
    </>
  );
}
