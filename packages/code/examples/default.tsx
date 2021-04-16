import { FC } from 'react';
import Code from '../index';

const DefaultCode: FC = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-5">
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
