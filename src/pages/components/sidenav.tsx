import Head from 'next/head';
import { Container } from '@/website/components/container';
import SidenavLeft from '@/packages/sidenav/examples/left';
import SidenavRight from '@/packages/sidenav/examples/right';
import SidenavNotClosedOutside from '@/packages/sidenav/examples/notClosedOutside';
import SidenavLeftSnippet from '@/packages/sidenav/snippets/left.mdx';
import SidenavRightSnippet from '@/packages/sidenav/snippets/right.mdx';
import SidenavNotClosedOutsideSnippet from '@/packages/sidenav/snippets/notClosedOutside.mdx';

export default function SidenavPage() {
  return (
    <>
      <Head>
        <title>Sidenav</title>
        <meta
          name="description"
          content="Kimia-ui Sidenav component is vertical navigation that displays when you click a button"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/sidenav"
        />
      </Head>
      <Container>
        <h1 className="mb-16 mt-12 text-center text-gray-600 text-3xl font-bold md:text-5xl">
          Sidenav
        </h1>
        <SidenavLeft />
        <SidenavLeftSnippet />
        <SidenavRight />
        <SidenavRightSnippet />
        <SidenavNotClosedOutside />
        <SidenavNotClosedOutsideSnippet />
      </Container>
    </>
  );
}
