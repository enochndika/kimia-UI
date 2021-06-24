import Head from 'next/head';
import { Container } from '@/website/components/container';
import AutoCompleteExample from '@/packages/autocomplete/examples';
import AutocompleteExampleSnippet from '@/packages/autocomplete/snippets/index.mdx';
import Table from '@/website/components/DocumentationTable';

export default function AutocompletePage() {
  return (
    <>
      <Head>
        <title>Autocomplete</title>
        <meta
          name="description"
          content="Kimia-ui autocomplete is used to indicate to the user agent that an automatic completion assistant can be provided and also to indicate the type of data expected."
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/field/autocomplete"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Autocomplete
        </h1>
        <h2 className="font-bold text-gray-700 text-lg md:text-2xl mb-12">
          Usage and props
        </h2>
        <Table name="autocomplete" />
        <AutoCompleteExample />
        <AutocompleteExampleSnippet />
      </Container>
    </>
  );
}
