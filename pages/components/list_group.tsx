import Head from 'next/head';
import MobileLayout from '../../website/layout/mobile';
import { Container } from '@/website/components/container';
import {
  ColoredListGroupComponent,
  ListGroupComponent,
  ListGroupLinkComponent,
} from '../../components/list-group';
import ListGroupExample from '@/website/snippets/list-group/simple.mdx';
import ColoredListGroupExample from '@/website/snippets/list-group/colored.mdx';
import LinkListGroupExample from '@/website/snippets/list-group/link.mdx';
import { CodeWrapper } from '@/website/components/codeWrapper';

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
        <CodeWrapper>
          <ListGroupExample />
        </CodeWrapper>
        <ColoredListGroupComponent />
        <CodeWrapper>
          <ColoredListGroupExample />
        </CodeWrapper>
        <ListGroupLinkComponent />
        <CodeWrapper>
          <LinkListGroupExample />
        </CodeWrapper>
      </Container>
    </>
  );
}

ListGroupPage.Layout = MobileLayout;
