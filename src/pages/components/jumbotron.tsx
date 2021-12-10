import Head from 'next/head';
import { Container } from '@/website/components/container';
import JumbotronComponent from '@/packages/jumbotron/examples/simple';
import JumbotronWithBackgroundComponent from '@/packages/jumbotron/examples/withBackground';
import JumbotronSnippet from '@/packages/jumbotron/snippets/simple.mdx';
import JumbotronBackgroundSnippet from '@/packages/jumbotron/snippets/withBackground.mdx';

export default function JumbotronPage() {
  return (
    <>
      <Head>
        <title>Jumbotron</title>
        <meta
          name="description"
          content="Kimia ui jumbotron component displays a big box for calling extra attention to some special content"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/jumbotron"
        />
      </Head>
      <Container>
        <h1 className="mb-16 mt-12 text-center text-gray-600 text-3xl font-bold md:text-5xl">
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
