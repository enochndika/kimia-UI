import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { Container } from '@/website/components/container';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Kimia-UI</title>
        <meta
          name="title"
          content="Kimia-UI — A collection of UI Components for React built with tailwindcss"
          key="title"
        />
        <meta
          name="description"
          content="Kimia ui provides fully customizable UI components for React built with TailwindCSS. No installation needed, just copy and paste any component you want to use"
          key="description"
        />
        <link rel="canonical" href="https://kimia-ui.vercel.app" />
      </Head>
      <Container>
        <div className="flex flex-wrap">
          <div className="w-full p-2 md:w-6/12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-8">
              A collection of UI Components for React built with Tailwind CSS
            </h1>
            <h2 className="mt-12 mb-4 text-gray-500 font-medium">
              Provides fully customizable UI Components compatible with Next.js,
              Gatsby and create-react-app.
            </h2>
            <h3 className="text-gray-500 font-medium">
              No installation needed, Just copy and paste a component you want
              to use
            </h3>
            <div className="mt-12 mb-6 md:mb-12">
              <h4>
                <Link href="/configuration">
                  <a>
                    <button className="px-6 font-bold py-3 active:bg-purple-800 bg-purple-900 rounded-lg text-white focus:outline-none">
                      Get Started
                    </button>
                  </a>
                </Link>
              </h4>
            </div>
          </div>
          <div className="hidden md:w-6/12 md:block">
            <div className="relative w-full h-full">
              <Image
                src="/animation.png"
                layout="fill"
                objectFit="cover"
                priority={true}
                alt="Kimia-UI animation"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
