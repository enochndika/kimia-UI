import Head from 'next/head';
import { Container } from '@/website/components/container';
import FieldWithFormik from '@/packages/field/examples/withFormik';
import FieldWithFormikSnippet from '@/packages/field/snippets/with-formik.mdx';

export default function FieldWithFormikPage() {
  return (
    <>
      <Head>
        <title>Field component with Formik and Yup</title>
        <meta
          name="description"
          content="An example using Field component with Formik and Yup"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/field/with-formik"
        />
      </Head>
      <Container>
        <h1 className="mb-16 mt-12 text-center text-gray-600 text-3xl font-bold md:text-4xl">
          Using Field component with Formik and Yup
        </h1>
        <FieldWithFormik />
        <FieldWithFormikSnippet />
      </Container>
    </>
  );
}
