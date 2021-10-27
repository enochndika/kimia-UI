import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import 'tailwindcss/tailwind.css';
import dynamic from 'next/dynamic';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { preToCodeBlock } from 'mdx-utils';
import { MDXProvider } from '@mdx-js/react';

import Layout from '@/website/layout/index';
import * as gtag from '@/website/utils/gtag';
import { CopyboardProps } from '@/website/components/copyboard';
import globalMetaTags from '@/website/data/globalMetaTags.json';
import SkeletonLoader from '@/website/components/skeleton-loader';
import { GA_TRACKING_ID } from '@/website/utils/gtag';

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

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
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
