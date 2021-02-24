import Head from 'next/head';
import {
  JumbotronComponent,
  JumbotronWithBackgroundComponent,
} from '../../components/jumbotron';
import { Container } from '@/website/components/container';
import MobileLayout from '@/website/layout/mobile';
import JumbotronExample from '@/website/snippets/jumbotron/simple.mdx';
import JumbotronBackgroundExample from '@/website/snippets/jumbotron/withBackground.mdx';
import { CodeWrapper } from '@/website/components/codeWrapper';

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
        <CodeWrapper>
          <JumbotronExample />
        </CodeWrapper>
        <JumbotronWithBackgroundComponent />
        <CodeWrapper>
          <JumbotronBackgroundExample />
        </CodeWrapper>
      </Container>
    </>
  );
}

JumbotronPage.Layout = MobileLayout;
