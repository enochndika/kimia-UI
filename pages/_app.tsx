import 'tailwindcss/tailwind.css';

import Head from 'next/head';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { AppProps } from 'next/app';
import { ComponentType, useEffect } from 'react';
import { preToCodeBlock } from 'mdx-utils';
import { MDXProvider } from '@mdx-js/react';

import * as gtag from '@/website/utils/gtag';
import { CopyboardProps } from '@/website/components/copyboard';
import { Loader } from '@/website/components/loader';
import Layout from '@/website/layout';

const Copyboard: ComponentType<CopyboardProps> = dynamic(
  () => import('@/website/components/copyboard').then((mod) => mod.Copyboard),
  { ssr: false, loading: () => <Loader /> },
);

const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    return <Copyboard {...props} />;
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageView(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        {/* Open Graph / Facebook*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kimia-ui.vercel.app" />
        <meta
          property="og:title"
          content="Kimia-UI — A collection of UI components for React built with Tailwind CSS"
        />
        <meta
          property="og:description"
          content="Kimia ui provides fully customizable UI components for React built with TailwindCSS. No installation needed, just copy and paste any component you want to use"
        />
        <meta
          property="og:image"
          content="https://kimia-ui.vercel.app/kimia-facebook.png"
        />
        <meta property="og:image:alt" content="Kimia-UI" />

        {/* Twitter*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://kimia-ui.vercel.app" />
        <meta
          property="twitter:title"
          content="Kimia-UI — A collection of UI Components for React built with Tailwind CSS"
        />
        <meta
          property="twitter:description"
          content="Kimia ui provides fully customizable UI components for React built with TailwindCSS. No installation needed, just copy and paste any component you want to use"
        />
        <meta
          property="twitter:image"
          content="https://kimia-ui.vercel.app/kimia-twitter.png"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <meta name="author" content="Enoch Ndika" key="author" />
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
