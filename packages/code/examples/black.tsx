import { FC } from 'react';
import Code from '../index';

const BlackCode: FC = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-5">Black</h2>
    <Code variant="black" acceptCopy={true}>
      yarn add @tailwindcss/jit
    </Code>
  </div>
);

export default BlackCode;
