import Head from 'next/head';
import {
  ColoredListGroupComponent,
  ListGroupComponent,
  ListGroupLinkComponent,
} from '@/components/list-group/example';
import MobileLayout from '@/website/layout/mobile';
import { Container } from '@/website/components/container';
import ListGroupSnippet from '@/website/snippets/list-group/simple.mdx';
import ColoredListGroupSnippet from '@/website/snippets/list-group/colored.mdx';
import LinkListGroupSnippet from '@/website/snippets/list-group/link.mdx';

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

ListGroupPage.Layout = MobileLayout;
