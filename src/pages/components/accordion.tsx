import Head from 'next/head';
import { Container } from '@/website/components/container';
import AccordionFirstExample from '@/packages/accordion/examples/first';
import AccordionSecondExample from '@/packages/accordion/examples/second';
import AccordionThirdExample from '@/packages/accordion/examples/third';
import AccordionFirstExampleSnippet from '@/packages/accordion/snippets/first.mdx';
import AccordionSecondExampleSnippet from '@/packages/accordion/snippets/second.mdx';
import AccordionThirdExampleSnippet from '@/packages/accordion/snippets/third.mdx';

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
        <AccordionFirstExample />
        <AccordionFirstExampleSnippet />
        <AccordionSecondExample />
        <AccordionSecondExampleSnippet />
        <AccordionThirdExample />
        <AccordionThirdExampleSnippet />
      </Container>
    </>
  );
}
