import Head from 'next/head';
import { Container } from '@/website/components/container';
import { Tab, Tabs } from '../../components/tabs';
import MobileLayout from '../../website/layout/mobile';

export default function TabPage() {
  return (
    <>
      <Head>
        <title>Tab</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Tab
        </h1>
        <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-12 mb-6">
          Variant 1
        </h2>
        <Tabs variant={1}>
          <Tab title="React">
            React has been designed from the start for gradual adoption, and you
            can use as little or as much React as you need. Whether you want to
            get a taste of React, add some interactivity to a simple HTML page,
            or start a complex React-powered app, the links in this section will
            help you get started
          </Tab>
          <Tab title="Next.js">
            The React Framework for Production Next.js gives you the best
            developer experience with all the features you need for production:
            hybrid static & server rendering, TypeScript support, smart
            bundling, route pre-fetching, and more. No config needed.
          </Tab>
          <Tab title="Nuxt.js">
            The Intuitive Vue Framework Build your next Vue.js application with
            confidence using NuxtJS. An open source framework making web
            development simple and powerful.
          </Tab>
        </Tabs>
        <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-20 mb-6">
          Variant 2
        </h2>
        <Tabs variant={2}>
          <Tab title="React">
            React has been designed from the start for gradual adoption, and you
            can use as little or as much React as you need. Whether you want to
            get a taste of React, add some interactivity to a simple HTML page,
            or start a complex React-powered app, the links in this section will
            help you get started
          </Tab>
          <Tab title="Next.js">
            The React Framework for Production Next.js gives you the best
            developer experience with all the features you need for production:
            hybrid static & server rendering, TypeScript support, smart
            bundling, route pre-fetching, and more. No config needed.
          </Tab>
          <Tab title="Nuxt.js">
            The Intuitive Vue Framework Build your next Vue.js application with
            confidence using NuxtJS. An open source framework making web
            development simple and powerful.
          </Tab>
        </Tabs>
        <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-20 mb-6">
          Tab as Pill
        </h2>
        <Tabs variant={3}>
          <Tab title="React">
            React has been designed from the start for gradual adoption, and you
            can use as little or as much React as you need. Whether you want to
            get a taste of React, add some interactivity to a simple HTML page,
            or start a complex React-powered app, the links in this section will
            help you get started
          </Tab>
          <Tab title="Next.js">
            The React Framework for Production Next.js gives you the best
            developer experience with all the features you need for production:
            hybrid static & server rendering, TypeScript support, smart
            bundling, route pre-fetching, and more. No config needed.
          </Tab>
          <Tab title="Nuxt.js">
            The Intuitive Vue Framework Build your next Vue.js application with
            confidence using NuxtJS. An open source framework making web
            development simple and powerful.
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

TabPage.Layout = MobileLayout;
