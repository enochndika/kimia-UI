import Head from 'next/head';
import { ModalRight } from '@/components/modal/example/right';
import { ModalLeft } from '@/components/modal/example/left';
import { ModalTop } from '@/components/modal/example/top';
import MobileLayout from '@/website/components/layout/mobile';
import { Container } from '@/website/components/container';
import { ModalNotClosedOutside } from '@/components/modal/example/notClosedOutside';
import ModalTopSnippet from '@/website/snippets/modal/top.mdx';
import ModalLeftSnippet from '@/website/snippets/modal/left.mdx';
import ModalRightSnippet from '@/website/snippets/modal/right.mdx';
import ModalNotClosedOutsideSnippet from '@/website/snippets/modal/notClosedOutside.mdx';

export default function ModalPage() {
  return (
    <>
      <Head>
        <title>Modal</title>
        <meta
          name="description"
          content="Kimia-ui provides very powerful modal component with different positions, on top, left and right"
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

ModalPage.Layout = MobileLayout;
