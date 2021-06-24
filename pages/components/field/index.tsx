import Head from 'next/head';
import { Container } from '@/website/components/container';
import DefaultFieldExample from '@/packages/field/examples/default';
import DefaultFieldExampleSnippet from '@/packages/field/snippets/default.mdx';
import Table from '@/website/components/DocumentationTable';

export default function FieldPage() {
  return (
    <>
      <Head>
        <title>Field Component</title>
        <meta
          name="description"
          content="Kimia-ui Field component makes it easier to manage input, select, textarea and checkbox with Tailwind CSS"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/field"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Field
        </h1>
        <h2 className="font-bold text-gray-700 text-lg md:text-2xl mb-12">
          Usage and props
        </h2>
        <div className="mb-8 text-gray-800">
          The Field component can be used as input, select or textarea. it's
          fully accessible (a11y)
        </div>
        <Table name="field" />
        <div className="text-gray-800 mt-8">
          You can also use all the default html attributes for each type of
          field such as (placeholder, onClick, onChange, onBlur and others ...)
        </div>
        <DefaultFieldExample />
        <DefaultFieldExampleSnippet />
      </Container>
    </>
  );
}
