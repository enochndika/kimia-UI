import Head from 'next/head';
import { Container } from '@/website/components/container';
import { CurtainMenuLeft } from '@/packages/curtain-menu/example/left';
import { CurtainMenuTop } from '@/packages/curtain-menu/example/top';
import CurtainMenuLeftSnippet from '@/packages/curtain-menu/snippets/left.mdx';
import CurtainMenuTopSnippet from '@/packages/curtain-menu/snippets/top.mdx';

export default function CurtainMenuPage() {
  return (
    <>
      <Head>
        <title>Curtain Menu</title>
        <meta
          name="description"
          content="Kimia-ui curtain menu is a component which displays full screen navigation overlay"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/curtain-menu"
        />
      </Head>
      <Container>
        <h1 className="mb-16 mt-12 text-center text-gray-600 text-3xl font-bold md:text-5xl">
          Curtain Menu
        </h1>
        <CurtainMenuLeft />
        <CurtainMenuLeftSnippet />
        <CurtainMenuTop />
        <CurtainMenuTopSnippet />
      </Container>
    </>
  );
}
