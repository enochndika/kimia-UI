import Head from 'next/head';
import { Container } from '@/website/container';
import Layout from '@/website/layout/default';
import {
  LargeSpinnerComponent,
  SpinnerComponent,
} from '@/components/spinner/example';
import SpinnerSnippet from '@/components/spinner/snippets/normal.mdx';
import LargeSpinnerSnippet from '@/components/spinner/snippets/large.mdx';

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

SpinnerPage.Layout = Layout;
