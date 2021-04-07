import Head from 'next/head';
import { Container } from '@/website/components/container';
import { FieldWithReactHookForm } from '@/packages/field/examples/withReactHookForm';
import FieldWithReactHookFormSnippet from '@/packages/field/snippets/with-react-hook-form.mdx';

export default function FieldWithHookFormPage() {
  return (
    <>
      <Head>
        <title>Field component with React Hook Form</title>
        <meta
          name="description"
          content="An example using Field component with React Hook Form"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/field/with-react-hook-form"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Using Field Component with React Hook Form
        </h1>
        <FieldWithReactHookForm />
        <FieldWithReactHookFormSnippet />
      </Container>
    </>
  );
}
