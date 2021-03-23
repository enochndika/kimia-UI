import Head from 'next/head';
import { Container } from '@/website/components/container';
import { DefaultInputExample } from '@/packages/input/examples/default';
import { InputRequiredExample } from '@/packages/input/examples/required';
import { InputErrorExample } from '@/packages/input/examples/error';
import DefaultInputExampleSnippet from '@/packages/input/snippets/default.mdx';
import InputRequiredExampleSnippet from '@/packages/input/snippets/required.mdx';
import InputErrorExampleSnippet from '@/packages/input/snippets/error.mdx';

export default function InputPage() {
  return (
    <>
      <Head>
        <title>Input Component</title>
        <meta
          name="description"
          content="Kimia-ui Input component makes it easier to manage input with Tailwind CSS"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/input"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Input
        </h1>
        <DefaultInputExample />
        <DefaultInputExampleSnippet />
        <InputRequiredExample />
        <InputRequiredExampleSnippet />
        <InputErrorExample />
        <InputErrorExampleSnippet />
      </Container>
    </>
  );
}
