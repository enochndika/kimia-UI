import Head from 'next/head';
import { Container } from '@/website/components/container';
import CollapseFirst from '@/packages/collapse/example/first';
import CollapseSecond from '@/packages/collapse/example/second';
import CollapseFirstSnippet from '@/packages/collapse/snippets/first.mdx';
import CollapseSecondSnippet from '@/packages/collapse/snippets/second.mdx';

export default function CollapsePage() {
  return (
    <>
      <Head>
        <title>Collapse</title>
        <meta
          name="description"
          content="Kimia-ui Collapse component allows you to toggle content which helps you to reorganize your content and make it expand when toggle"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/collapse"
        />
      </Head>
      <Container>
        <h1 className="mb-16 mt-12 text-center text-gray-600 text-3xl font-bold md:text-5xl">
          Collapse
        </h1>
        <CollapseFirst />
        <CollapseFirstSnippet />
        <CollapseSecond />
        <CollapseSecondSnippet />
      </Container>
    </>
  );
}
