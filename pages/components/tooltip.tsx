import Head from 'next/head';
import { TooltipComponent } from '@/components/tooltip/example';
import MobileLayout from '../../website/layout/mobile';
import { Container } from '@/website/components/container';
import TooltipSnippet from '@/website/snippets/tooltip/index.mdx';

export default function TooltipPage() {
  return (
    <>
      <Head>
        <title>Tooltip</title>
        <meta
          name="description"
          content="Kimia-ui Tooltip is a component which displays an element when the user hovers the mouse cursor over the object"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Tooltip
        </h1>
        <TooltipComponent />
        <TooltipSnippet />
      </Container>
    </>
  );
}

TooltipPage.Layout = MobileLayout;
