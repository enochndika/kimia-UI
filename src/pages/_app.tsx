import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import dynamic from 'next/dynamic';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { preToCodeBlock } from 'mdx-utils';
import { MDXProvider } from '@mdx-js/react';

import Layout from '@/website/layout/layout';
import * as gtag from '@/website/utils/gtag';
import { CopyboardProps } from '@/website/components/copyboard';
import globalMetaTags from '@/website/data/globalMetaTags.json';
import SkeletonLoader from '@/website/components/skeleton-loader';

const Copyboard: React.ComponentType<CopyboardProps> = dynamic(
  () => import('@/website/components/copyboard'),
  { ssr: false, loading: () => <SkeletonLoader /> },
);

const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    return <Copyboard {...props} />;
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const { events } = useRouter();

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageView(url);
    };
    events.on('routeChangeComplete', handleRouteChange);

    return () => {
      events.off('routeChangeComplete', handleRouteChange);
    };
  }, [events]);

  return (
    <>
      <Head>
        <meta name="author" content="Enoch Ndika" key="author" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {globalMetaTags.map((tag) => (
          <meta property={tag.property} content={tag.content} key={tag.id} />
        ))}
      </Head>
      <MDXProvider components={components}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  );
}

export default MyApp;
