import Head from 'next/head';
import Layout from '@/website/layout';
import { Container } from '@/website/components/container';
import {
  ColoredListGroupComponent,
  ListGroupComponent,
  ListGroupLinkComponent,
} from '@/components/list-group/example';
import ListGroupSnippet from '@/components/list-group/snippets/simple.mdx';
import ColoredListGroupSnippet from '@/components/list-group/snippets/colored.mdx';
import LinkListGroupSnippet from '@/components/list-group/snippets/link.mdx';

export default function ListGroupPage() {
  return (
    <>
      <Head>
        <title>List Group</title>
        <meta
          name="description"
          content="Kimia-ui list groups component displays list of elements in beautiful manner and very flexible"
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

ListGroupPage.Layout = Layout;
