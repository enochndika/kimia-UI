import Head from 'next/head';
import { Container } from '@/website/container';
import { SidenavLeft } from '@/components/sidenav/examples/left';
import { SidenavRight } from '@/components/sidenav/examples/right';
import MobileLayout from '@/website/layout/mobile';
import SidenavLeftSnippet from '@/components/sidenav/snippets/left.mdx';
import SidenavRightSnippet from '@/components/sidenav/snippets/right.mdx';

export default function SidenavPage() {
  return (
    <>
      <Head>
        <title>Sidenav</title>
        <meta
          name="description"
          content="Kimia-ui Sidenav component is vertical navigation that displays when you click a button"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Sidenav
        </h1>
        <SidenavLeft />
        <SidenavLeftSnippet />
        <SidenavRight />
        <SidenavRightSnippet />
      </Container>
    </>
  );
}

SidenavPage.Layout = MobileLayout;
