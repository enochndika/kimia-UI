import { FC } from 'react';
import { Collapse } from '../../collapse';

export const CollapseComponent: FC = () => (
  <div className="flex flex-wrap mb-4">
    <div className="mr-5">
      <Collapse title="Click to see me" btnClassName="bg-blue-700">
        <h2>Next.js</h2>
        <h3>React</h3>
        <h4>JavaScript</h4>
        <h5>Chakra-UI</h5>
      </Collapse>
    </div>
    <div className="mr-5">
      <Collapse title="Click to see me" btnClassName="bg-green-700">
        <h2>Tailwindcss</h2>
        <h3>Vercel</h3>
        <h4>Docker</h4>
      </Collapse>
    </div>
    <div className="mr-5">
      <Collapse title="Click to see me" btnClassName="bg-indigo-900">
        <h1>Netlify</h1>
        <h2>Typescript</h2>
      </Collapse>
    </div>
  </div>
);
