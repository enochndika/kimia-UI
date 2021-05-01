import Head from 'next/head';
import { Container } from '@/website/components/container';
import ModalDefault from '@/packages/modal/examples/default';
import ModalAnimation from '@/packages/modal/examples/animation';
import ModalNotClosedOutside from '@/packages/modal/examples/notClosedOutside';
import ModalLarge from '@/packages/modal/examples/large';
import ModalExtraLarge from '@/packages/modal/examples/extraLarge';
import ModalAnimationSnippet from '@/packages/modal/snippets/animation.mdx';
import ModalNotClosedOutsideSnippet from '@/packages/modal/snippets/notClosedOutside.mdx';
import ModalDefaultSnippet from '@/packages/modal/snippets/default.mdx';
import ModalLargeSnippet from '@/packages/modal/snippets/large.mdx';
import ModalExtraLargeSnippet from '@/packages/modal/snippets/extraLarge.mdx';

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
        <div className="text-gray-700 mb-3">
          * All variants of the modal will have the same width on mobile
        </div>
        <div className="mb-3 text-gray-800">
          * You can close a modal with <strong>ESC</strong> key
        </div>
        <div className="mb-8 text-gray-800">
          * When you open a <strong>modal</strong> on kimia website, the body
          will move a bit due to the internal layout configuration, but when you
          copy and paste the snippet into your application, the body will not
          move when you open it.
        </div>
        <ModalDefault />
        <ModalDefaultSnippet />
        <ModalAnimation />
        <ModalAnimationSnippet />
        <ModalNotClosedOutside />
        <ModalNotClosedOutsideSnippet />
        <ModalLarge />
        <ModalLargeSnippet />
        <ModalExtraLarge />
        <ModalExtraLargeSnippet />
      </Container>
    </>
  );
}
