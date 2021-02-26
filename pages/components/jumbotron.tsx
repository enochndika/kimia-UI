import Head from 'next/head';
import { Container } from '@/website/container';
import Layout from '@/website/layout/default';
import {
  JumbotronComponent,
  JumbotronWithBackgroundComponent,
} from '@/components/jumbotron/example';
import JumbotronSnippet from '@/components/jumbotron/snippets/simple.mdx';
import JumbotronBackgroundSnippet from '@/components/jumbotron/snippets/withBackground.mdx';

export default function JumbotronPage() {
  return (
    <>
      <Head>
        <title>Jumbotron</title>
        <meta
          name="description"
          content="Kimia ui jumbotron component displays a big box for calling extra attention to some special content"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Jumbotron
        </h1>
        <JumbotronComponent />
        <JumbotronSnippet />
        <JumbotronWithBackgroundComponent />
        <JumbotronBackgroundSnippet />
      </Container>
    </>
  );
}

JumbotronPage.Layout = Layout;
