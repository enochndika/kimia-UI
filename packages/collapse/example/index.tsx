import { FC } from 'react';
import { Collapse } from '../../collapse';

export const CollapseComponent: FC = () => (
  <div className="flex flex-wrap mb-4">
    <div className="mr-5">
      <Collapse title="Click to see me" btnClassName="bg-blue-700">
        <div>Next.js</div>
        <div>React</div>
        <div>JavaScript</div>
        <div>Chakra-UI</div>
      </Collapse>
    </div>
    <div className="mr-5">
      <Collapse title="Click to see me" btnClassName="bg-green-700">
        <div>Tailwindcss</div>
        <div>Vercel</div>
        <div>Docker</div>
      </Collapse>
    </div>
    <div className="mr-5">
      <Collapse title="Click to see me" btnClassName="bg-indigo-900">
        <div>Netlify</div>
        <div>Typescript</div>
      </Collapse>
    </div>
  </div>
);
