import Head from 'next/head';
import { MultipleCard, SingleCard } from '@/packages/card/example';
import SingleCardSnippet from '@/packages/card/snippets/single.mdx';
import MultipleCardSnippet from '@/packages/card/snippets/multiple.mdx';
import { Container } from '@/website/components/container';

export default function CardPage() {
  return (
    <>
      <Head>
        <title>Card</title>
        <meta
          name="description"
          content="Kimia-ui Cards are reusable react components which display content with shadow"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/card"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Card
        </h1>
        <SingleCard />
        <SingleCardSnippet />
        <MultipleCard />
        <MultipleCardSnippet />
      </Container>
    </>
  );
}
