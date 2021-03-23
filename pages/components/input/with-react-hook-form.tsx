import Head from 'next/head';
import { Container } from '@/website/components/container';
import { InputWithReactHookForm } from '@/packages/input/examples/withReactHookForm';
import InputWithReactHookFormSnippet from '@/packages/input/snippets/with-react-hook-form.mdx';

export default function InputWithHookFormPage() {
  return (
    <>
      <Head>
        <title>Input component with React Hook Form</title>
        <meta
          name="description"
          content="An example using Input component with React Hook Form"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/input/with-react-hook-form"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Example with React Hook Form
        </h1>
        <InputWithReactHookForm />
        <InputWithReactHookFormSnippet />
      </Container>
    </>
  );
}
