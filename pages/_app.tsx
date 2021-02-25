import NProgress from 'nprogress';
import 'tailwindcss/tailwind.css';
import 'nprogress/nprogress.css';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { ComponentType, FC, useEffect } from 'react';
import { preToCodeBlock } from 'mdx-utils';
import { MDXProvider } from '@mdx-js/react';
import * as gtag from '@/website/utils/gtag';
import dynamic from 'next/dynamic';
import { CopyboardProps } from '@/website/components/copyboard';
import { Loader } from '@/website/components/loader';

const Copyboard: ComponentType<CopyboardProps> = dynamic(
  () => import('../website/components/copyboard').then((mod) => mod.Copyboard),
  { ssr: false, loading: () => <Loader /> },
);

const Noop: FC = ({ children }) => <>{children}</>;

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const components = {
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    return <Copyboard {...props} />;
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;
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
