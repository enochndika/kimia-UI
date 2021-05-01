import Head from 'next/head';
import { Container } from '@/website/components/container';
import DrawerLeft from '@/packages/drawer/examples/left';
import DrawerRight from '@/packages/drawer/examples/right';
import DrawerBottom from '@/packages/drawer/examples/bottom';
import DrawerTop from '@/packages/drawer/examples/top';
import DrawerSimple from '@/packages/drawer/examples/simple';
import DrawerLeftSnippet from '@/packages/drawer/snippets/left.mdx';
import DrawerRightSnippet from '@/packages/drawer/snippets/right.mdx';
import DrawerBottomSnippet from '@/packages/drawer/snippets/bottom.mdx';
import DrawerTopSnippet from '@/packages/drawer/snippets/top.mdx';
import DrawerSimpleSnippet from '@/packages/drawer/snippets/simple.mdx';

export default function DrawerPage() {
  return (
    <>
      <Head>
        <title>Drawer</title>
        <meta
          name="description"
          content="Kimia-ui drawer provides a convenient way to present information such as notifications or context-sensitive help"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/drawer"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Drawer
        </h1>
        <div className="mb-3 text-gray-800">
          * You can close a drawer with <strong>ESC</strong> key
        </div>
        <div className="mb-8 text-gray-800">
          * When you open a <strong>drawer</strong> on kimia website, the body
          will move a bit due to the internal layout configuration, but when you
          copy and paste the snippet into your application, the body will not
          move when you open it.
        </div>
        <DrawerLeft />
        <DrawerLeftSnippet />
        <DrawerRight />
        <DrawerRightSnippet />
        <DrawerTop />
        <DrawerTopSnippet />
        <DrawerBottom />
        <DrawerBottomSnippet />
        <DrawerSimple />
        <DrawerSimpleSnippet />
      </Container>
    </>
  );
}
