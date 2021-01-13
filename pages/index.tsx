import Head from "next/head";
import DefaultButtons from "../components/general/button/defaultButton";
import { Tabs } from "../components/general/tabs";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kimia-UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultButtons />
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-12 mb-6">
        Variant 1
      </h2>
      <Tabs variant={1}>
        <Tabs.Content id="React">
          React has been designed from the start for gradual adoption, and you
          can use as little or as much React as you need. Whether you want to
          get a taste of React, add some interactivity to a simple HTML page, or
          start a complex React-powered app, the links in this section will help
          you get started
        </Tabs.Content>
        <Tabs.Content id="Next.js">
          The React Framework for Production Next.js gives you the best
          developer experience with all the features you need for production:
          hybrid static & server rendering, TypeScript support, smart bundling,
          route pre-fetching, and more. No config needed.
        </Tabs.Content>
        <Tabs.Content id="Nuxt.js">
          The Intuitive Vue Framework Build your next Vue.js application with
          confidence using NuxtJS. An open source framework making web
          development simple and powerful.
        </Tabs.Content>
      </Tabs>
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-20 mb-6">
        Variant 2
      </h2>
      <Tabs variant={2}>
        <Tabs.Content id="React">
          React has been designed from the start for gradual adoption, and you
          can use as little or as much React as you need. Whether you want to
          get a taste of React, add some interactivity to a simple HTML page, or
          start a complex React-powered app, the links in this section will help
          you get started
        </Tabs.Content>
        <Tabs.Content id="Next.js">
          The React Framework for Production Next.js gives you the best
          developer experience with all the features you need for production:
          hybrid static & server rendering, TypeScript support, smart bundling,
          route pre-fetching, and more. No config needed.
        </Tabs.Content>
        <Tabs.Content id="Nuxt.js">
          The Intuitive Vue Framework Build your next Vue.js application with
          confidence using NuxtJS. An open source framework making web
          development simple and powerful.
        </Tabs.Content>
      </Tabs>
      <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-20 mb-6">
        Tab as Pill
      </h2>
      <Tabs variant={3}>
        <Tabs.Content id="React">
          React has been designed from the start for gradual adoption, and you
          can use as little or as much React as you need. Whether you want to
          get a taste of React, add some interactivity to a simple HTML page, or
          start a complex React-powered app, the links in this section will help
          you get started
        </Tabs.Content>
        <Tabs.Content id="Next.js">
          The React Framework for Production Next.js gives you the best
          developer experience with all the features you need for production:
          hybrid static & server rendering, TypeScript support, smart bundling,
          route pre-fetching, and more. No config needed.
        </Tabs.Content>
        <Tabs.Content id="Nuxt.js">
          The Intuitive Vue Framework Build your next Vue.js application with
          confidence using NuxtJS. An open source framework making web
          development simple and powerful.
        </Tabs.Content>
      </Tabs>
    </>
  );
}
