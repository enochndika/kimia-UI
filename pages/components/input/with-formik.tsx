import Head from 'next/head';
import { Container } from '@/website/components/container';
import { InputWithFormik } from '@/packages/input/examples/withFormik';
import InputWithFormikSnippet from '@/packages/input/snippets/with-formik.mdx';

export default function InputWithFormikPage() {
  return (
    <>
      <Head>
        <title>Input component with Formik and Yup</title>
        <meta
          name="description"
          content="An example using Input component with Formik and Yup"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/input/with-formik"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Example with Formik and Yup
        </h1>
        <InputWithFormik />
        <InputWithFormikSnippet />
      </Container>
    </>
  );
}
