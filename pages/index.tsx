import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/website/layout/desktop';
import { Container } from '@/website/container';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimia-UI</title>
        <meta
          name="title"
          content="Kimia-UI — A collection of React components built with tailwindcss"
          key="title"
        />
        <meta
          name="description"
          content="Kimia ui provides fully customizable React components built with tailwindcss compatible with Next.js, Gatsby and create-react-app. Just copy and paste the source code of the component you want to use"
          key="description"
        />

        {/* Open Graph / Facebook*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kimia-ui.vercel.app" />
        <meta
          property="og:title"
          content="Kimia-UI — A collection of React components built with tailwindcss"
        />
        <meta
          property="og:description"
          content="Kimia ui provides fully customizable React components built with tailwindcss compatible with Next.js, Gatsby and create-react-app. Just copy and paste the source code of the component you want to use"
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
          content="Kimia-UI — A collection of React components built with tailwindcss"
        />
        <meta
          property="twitter:description"
          content="Kimia ui provides fully customizable React components built with tailwindcss compatible with Next.js, Gatsby and create-react-app. Just copy and paste the source code of the component you want to use"
        />
        <meta
          property="twitter:image"
          content="https://kimia-ui.vercel.app/kimia-twitter.png"
        />
      </Head>
      <Container>
        <div className="flex flex-wrap">
          <div className="w-full p-2 md:w-6/12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-8">
              A collection of React components built with tailwindcss 2.0
            </h1>
            <p className="my-12 text-gray-500 font-medium">
              Provides fully customizable React components compatible with
              Next.js, Gatsby and create-react-app.
            </p>
            <div className="mt-12 mb-6 md:mb-12">
              <Link href="/configuration">
                <a>
                  <button className="px-6 font-bold py-3 active:bg-purple-800 bg-purple-900 rounded-lg text-white focus:outline-none">
                    Get Started
                  </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="hidden md:w-6/12 md:block">
            <div className="relative w-full h-full">
              <Image
                src="/animation.png"
                layout="fill"
                objectFit="cover"
                priority={true}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

Home.Layout = Layout;
