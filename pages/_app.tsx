import NProgress from 'nprogress';
import 'tailwindcss/tailwind.css';
import 'nprogress/nprogress.css';
import Head from 'next/head';
import Router from 'next/router';
import { AppProps } from 'next/app';
import { FC } from 'react';

const Noop: FC = ({ children }) => <>{children}</>;

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
          key="viewport"
        />
        <meta name="author" content="Enoch Ndika" key="author" />
        <meta
          name="keywords"
          content="Enoch Ndika, Kimia, Kimia-UI, Kimia ui, kimia-ui, ui library, React, Next.js, Components"
          key="keywords"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
