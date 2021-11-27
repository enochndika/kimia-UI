import { FC } from 'react';
import { Tab, Tabs } from '../tab';

const TabVariantOne: FC = () => (
  <div className="mb-8">
    <h2 className="mb-6 mt-12 text-gray-600 text-lg font-bold md:text-2xl">
      Variant 1
    </h2>
    <Tabs variant={1}>
      <Tab title="React">
        React has been designed from the start for gradual adoption, and you can
        use as little or as much React as you need. Whether you want to get a
        taste of React, add some interactivity to a simple HTML page, or start a
        complex React-powered app, the links in this section will help you get
        started
      </Tab>
      <Tab title="Next.js">
        The React Framework for Production Next.js gives you the best developer
        experience with all the features you need for production: hybrid static
        & server rendering, TypeScript support, smart bundling, route
        pre-fetching, and more. No config needed.
      </Tab>
      <Tab title="Nuxt.js">
        The Intuitive Vue Framework Build your next Vue.js application with
        confidence using NuxtJS. An open source framework making web development
        simple and powerful.
      </Tab>
    </Tabs>
  </div>
);

export default TabVariantOne;
