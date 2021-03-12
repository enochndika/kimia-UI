import Head from 'next/head';
import { Container } from '@/website/components/container';
import { ScrollIndicator } from '@/packages/scroll-indicator';
import ScrollIndicatorSnippet from '@/packages/scroll-indicator/snippets/index.mdx';

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
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Scroll Indicator
        </h1>
        <ScrollIndicator />
        <ScrollIndicatorSnippet />
      </Container>
    </>
  );
}
