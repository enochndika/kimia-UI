import Head from 'next/head';
import Link from 'next/link';

import { Container } from '@/website/components/container';
import TailwindConfig from '@/website/utils/tailwindConfig.mdx';

export default function ConfigurationPage() {
  return (
    <>
      <Head>
        <title>Configuration</title>
        <meta
          name="description"
          content="The minimal tailwind configuration required to make some components to work properly"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/configuration"
        />
      </Head>
      <Container>
        <h1 className="mb-8 mt-12 text-gray-800 text-2xl font-bold md:text-3xl">
          Configuration
        </h1>
        <p className="mb-5 text-gray-600 md:mb-2.5">
          After installing tailwindcss in your React project, you can overwrite{' '}
          <code className="px-1 font-bold">tailwind.config.js</code>with the
          configuration below.
        </p>
        <p className="mb-5 text-gray-600 md:mb-2.5">
          Some components require additional configuration to work properly.
        </p>
        <div className="my-10">
          <Link href="/components/accordion">
            <a>
              <button className="px-6 py-3 text-white font-bold active:bg-purple-800 bg-purple-900 rounded-lg focus:outline-none">
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
