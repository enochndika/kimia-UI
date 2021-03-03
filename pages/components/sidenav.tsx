import Head from 'next/head';
import { Container } from '@/website/components/container';
import { SidenavLeft } from '../../packages/sidenav/examples/left';
import { SidenavRight } from '../../packages/sidenav/examples/right';
import Layout from '@/website/layout';
import SidenavLeftSnippet from '../../packages/sidenav/snippets/left.mdx';
import SidenavRightSnippet from '../../packages/sidenav/snippets/right.mdx';

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

SidenavPage.Layout = Layout;
