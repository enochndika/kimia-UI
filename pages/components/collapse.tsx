import Head from 'next/head';
import { CollapseComponent } from '@/components/collapse/example';
import Layout from '@/website/layout';
import { Container } from '@/website/components/container';
import CollapseSnippet from '@/components/collapse/snippets/index.mdx';

export default function CollapsePage() {
  return (
    <>
      <Head>
        <title>Collapse</title>
        <meta
          name="description"
          content="Kimia-ui Collapse component allows you to toggle content which helps you to reorganize your content and make it expand when toggle"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Collapse
        </h1>
        <CollapseComponent />
        <CollapseSnippet />
      </Container>
    </>
  );
}

CollapsePage.Layout = Layout;
