import Head from 'next/head';
import { Container } from '@/website/components/container';
import ListGroupComponent from '@/packages/list-group/example/simple';
import ColoredListGroupComponent from '@/packages/list-group/example/colored';
import ListGroupLinkComponent from '@/packages/list-group/example/link';
import ListGroupSnippet from '@/packages/list-group/snippets/simple.mdx';
import ColoredListGroupSnippet from '@/packages/list-group/snippets/colored.mdx';
import LinkListGroupSnippet from '@/packages/list-group/snippets/link.mdx';

export default function ListGroupPage() {
  return (
    <>
      <Head>
        <title>List Group</title>
        <meta
          name="description"
          content="Kimia-ui list groups component displays list of elements in beautiful manner and very flexible"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/list_group"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          List Group
        </h1>
        <ListGroupComponent />
        <ListGroupSnippet />
        <ColoredListGroupComponent />
        <ColoredListGroupSnippet />
        <ListGroupLinkComponent />
        <LinkListGroupSnippet />
      </Container>
    </>
  );
}
