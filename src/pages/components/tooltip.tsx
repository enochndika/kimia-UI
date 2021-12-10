import Head from 'next/head';
import TooltipComponent from '@/packages/tooltip/examples';
import { Container } from '@/website/components/container';
import TooltipSnippet from '@/packages/tooltip/snippets/index.mdx';

export default function TooltipPage() {
  return (
    <>
      <Head>
        <title>Tooltip</title>
        <meta
          name="description"
          content="Kimia-ui Tooltip is a component which displays an element when the user hovers the mouse cursor over the object"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/tooltip"
        />
      </Head>
      <Container>
        <h1 className="mb-16 mt-12 text-center text-gray-600 text-3xl font-bold md:text-5xl">
          Tooltip
        </h1>
        <TooltipComponent />
        <TooltipSnippet />
      </Container>
    </>
  );
}
