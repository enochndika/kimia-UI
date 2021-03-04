import Head from 'next/head';
import { Container } from '@/website/components/container';
import {
  LargeSpinnerComponent,
  SpinnerComponent,
} from '@/packages/spinner/example';
import SpinnerSnippet from '@/packages/spinner/snippets/normal.mdx';
import LargeSpinnerSnippet from '@/packages/spinner/snippets/large.mdx';

export default function SpinnerPage() {
  return (
    <>
      <Head>
        <title>Spinner</title>
        <meta
          name="description"
          content="Kimia-ui spinner is an animated circle that is used to keep users focused while the page is still loading, which provides a decent user experience "
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Spinner
        </h1>
        <SpinnerComponent />
        <SpinnerSnippet />
        <LargeSpinnerComponent />
        <LargeSpinnerSnippet />
      </Container>
    </>
  );
}
