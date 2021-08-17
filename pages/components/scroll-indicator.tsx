import Head from 'next/head';
import { Container } from '@/website/components/container';
import ScrollIndicatorSnippet from '@/packages/scroll-indicator/snippets/index.mdx';
import ScrollIndicatorExample from '@/packages/scroll-indicator/examples';

export default function ScrollIndicatorPage() {
  return (
    <>
      <Head>
        <title>Scroll Indicator</title>
        <meta
          name="description"
          content="Kimia-ui Scroll Indicator component is a progress bar that represents how much a page has been scrolled"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/scroll-indicator"
        />
      </Head>
      <Container>
        <h1 className="mb-16 mt-12 text-center text-gray-600 text-3xl font-bold md:text-5xl">
          Scroll Indicator
        </h1>
        <ScrollIndicatorExample />
        <ScrollIndicatorSnippet />
      </Container>
    </>
  );
}
