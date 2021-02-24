import Head from 'next/head';
import { Container } from '@/website/components/container';
import { MultipleCard, SingleCard } from '../../components/card';
import MobileLayout from '../../website/layout/mobile';
import SingleCardExample from '../../website/snippets/card/single.mdx';
import MultipleCardExample from '../../website/snippets/card/multiple.mdx';
import { CodeWrapper } from '@/website/components/codeWrapper';

export default function CardPage() {
  return (
    <>
      <Head>
        <title>Card</title>
        <meta
          name="description"
          content="Kimia-ui Cards are reusable react components which display content with shadow"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Card
        </h1>
        <SingleCard />
        <CodeWrapper>
          <SingleCardExample />
        </CodeWrapper>
        <MultipleCard />
        <CodeWrapper>
          <MultipleCardExample />
        </CodeWrapper>
      </Container>
    </>
  );
}

CardPage.Layout = MobileLayout;
