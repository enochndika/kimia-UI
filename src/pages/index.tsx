import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import codePicture from '@/public/images/code.png';
import designerPicture from '@/public/images/designer.png';
import { Container } from '@/website/components/container';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
          Kimia-UI - UI Components for React built with Tailwind CSS 3
        </title>
        <meta
          name="title"
          content="Kimia-UI - UI Components for React built with Tailwind CSS 3"
        />
        <meta
          name="description"
          content="No installation needed, just copy and paste any component you want to use"
        />
        <link rel="canonical" href="https://kimia-ui.vercel.app" />
      </Head>
      <Container>
        <div className="flex flex-wrap mt-12 2xl:mt-32">
          <div className="p-2 w-full md:w-6/12">
            <h1 className="text-gray-900 font-inter text-4xl font-bold lg:text-5xl">
              A collection of UI Components for React built with Tailwind CSS 3
            </h1>
            <div className="text-gray-700 text-lg font-medium">
              <h2 className="mb-4 mt-12">
                Provides fully customizable UI Components compatible with
                Next.js, Remix, Gatsby, and others React meta frameworks.
              </h2>
              <h3 className="font-medium">
                No installation needed, Just copy and paste a component you want
                to use
              </h3>
            </div>
            <div className="mb-6 mt-12 md:mb-12">
              <h4>
                <Link href="/configuration">
                  <a>
                    <button className="px-6 py-3 text-white font-bold active:bg-purple-800 bg-purple-900 rounded-lg focus:outline-none">
                      Get Started
                    </button>
                  </a>
                </Link>
              </h4>
            </div>
          </div>
          <div className="hidden md:block md:w-6/12">
            <div className="relative w-full h-full">
              <Image
                src={designerPicture}
                layout="fill"
                placeholder="blur"
                objectFit="contain"
                priority={true}
                alt="Kimia-UI animation"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 px-2 md:mt-20 md:px-0 xl:mt-36 2xl:mt-64">
          <h2 className="text-center text-gray-900 font-inter text-2xl font-bold md:text-4xl">
            Why Using Kimia-UI ?
          </h2>
          <div className="mt-8 text-gray-700 text-lg space-y-4 md:px-32 md:text-center xl:px-60">
            <p>
              Tailwind CSS is a utility-first CSS framework for rapidly building
              custom user interfaces. Il allows you writing your style without
              leaving your HTML.
            </p>
            <p>
              The biggest disadvantage of Tailwind CSS is the risk of having too
              long classes that will make our code not readable enough.
            </p>
            <p>
              As React is component-based, we can extract component logic with
              its classes and reuse them elsewhere which will result in more
              readable code with more components and fewer classes.
            </p>
            <p>
              That's why I have created this collection of UI components fully
              customizable.
            </p>
            <p>Just copy and paste a component you want to use</p>
          </div>
          <div className="flex justify-center mt-8">
            <div className="w-full md:w-6/12 xl:w-5/12">
              <Image
                src={codePicture}
                objectFit="cover"
                placeholder="blur"
                alt="Coding illustration"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
