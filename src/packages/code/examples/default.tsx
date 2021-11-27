import { FC } from 'react';
import Code from '../code';

const DefaultCode: FC = () => (
  <div className="mb-12">
    <h2 className="mb-5 text-gray-600 text-lg font-bold md:text-2xl">
      Default
    </h2>
    <Code acceptCopy={true} variant="default">
      yarn add next react react-dom
    </Code>
    <div className="mb-5" />
    <Code acceptCopy={true} variant="default">
      npm install @supabase/supabase-js
    </Code>
  </div>
);

export default DefaultCode;
