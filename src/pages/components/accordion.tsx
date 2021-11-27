import Head from 'next/head';
import { Container } from '@/website/components/container';
import AccordionGrayColor from '@/packages/accordion/examples/gray';
import AccordionIndigoColor from '@/packages/accordion/examples/indigo';
import AccordionGreenColor from '@/packages/accordion/examples/green';
import AccordionGrayColorSnippet from '@/packages/accordion/snippets/gray.mdx';
import AccordionIndigoColorSnippet from '@/packages/accordion/snippets/indigo.mdx';
import AccordionGreenColorSnippet from '@/packages/accordion/snippets/green.mdx';

export default function AccordionPage() {
  return (
    <>
      <Head>
        <title>Accordion</title>
        <meta
          name="description"
          content="Kimia-ui Accordion component allows you to toggle one specific block according to the identifiant"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/accordion"
        />
      </Head>
      <Container>
        <h1 className="mb-16 mt-12 text-center text-gray-600 text-3xl font-bold md:text-5xl">
          Accordion
        </h1>
        <AccordionGrayColor />
        <AccordionGrayColorSnippet />
        <AccordionIndigoColor />
        <AccordionIndigoColorSnippet />
        <AccordionGreenColor />
        <AccordionGreenColorSnippet />
      </Container>
    </>
  );
}
