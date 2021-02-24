import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@/website/components/container';
import Layout from '../website/components/layout/desktop';
import TailwindConfig from '@/website/snippets/tailwindConfig.mdx';

export default function ConfigurationPage() {
  return (
    <>
      <Head>
        <title>Configuration</title>
        <meta
          name="description"
          content="The minimal tailwind configuration required to make some components to work properly"
        />
      </Head>
      <Container>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800  mb-8">
          Configuration
        </h1>
        <p className="mb-5 md:mb-2.5 text-gray-600">
          After installing tailwindcss in your React project, you can overwrite{' '}
          <code className="px-1 font-bold">tailwind.config.js</code>with the
          configuration below.
        </p>
        <p className="mb-5 md:mb-2.5 text-gray-600">
          Some components require additional configuration to work properly.
        </p>
        <div className="my-10">
          <Link href="/components/buttons">
            <a>
              <button className="px-6 font-bold py-3 active:bg-purple-800 bg-purple-900 rounded-lg text-white focus:outline-none">
                Components
              </button>
            </a>
          </Link>
        </div>
        <TailwindConfig />
        <div className="mb-4" />
      </Container>
    </>
  );
}

ConfigurationPage.Layout = Layout;
