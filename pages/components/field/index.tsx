import Head from 'next/head';
import { Container } from '@/website/components/container';
import { DefaultFieldExample } from '@/packages/field/examples/default';
import DefaultFieldExampleSnippet from '../../../packages/field/snippets/default.mdx';
import Code from '@/packages/code';

export default function FieldPage() {
  return (
    <>
      <Head>
        <title>Field Component</title>
        <meta
          name="description"
          content="Kimia-ui Field component makes it easier to manage input, select, textarea and checkbox with Tailwind CSS"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/field"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Field
        </h1>
        <h2 className="font-bold text-gray-600 text-lg md:text-2xl mb-12">
          Usage and props
        </h2>
        <div className="mb-8">
          The Field component can be used as input, select and textarea
        </div>
        <ul className="list-inside mb-8">
          <li className="mb-3">
            <Code variant="default">dot</Code>
            <span className="text-sm text-gray-800 pl-1">
              ( boolean ) if true, a dot will be displayed on the side of the
              label to indicate a required field
            </span>
          </li>
          <li className="mb-3">
            <Code variant="default">error</Code>
            <span className="text-sm text-gray-800 pl-1">
              ( boolean ) if true, field is not valid and false field is valid
            </span>
          </li>
          <li className="mb-3">
            <Code variant="default">errorMessage</Code>
            <span className="text-sm text-gray-800 pl-1">
              ( string ) will display a message when error prop is true
            </span>
          </li>
          <li className="mb-3">
            <Code variant="default">label</Code>
            <span className="text-sm text-gray-800 pl-1">
              ( string ) label for field
            </span>
          </li>
          <li className="mb-3">
            <Code variant="default">name</Code>
            <span className="text-sm text-gray-800 pl-1">
              ( string ) name of the field
            </span>
          </li>
          <li>
            <Code variant="default">type</Code>
            <span className="text-sm text-gray-800 pl-1">
              type of the field (select, textarea, text, password, checkbox,
              password etc...)
            </span>
          </li>
        </ul>
        <div className="text-gray-800">
          For a better accessibility ( a11y ), when a field is required, add the
          <Code variant="default">aria-required</Code> prop and when a field is
          not valid add the
          <Code variant="default">aria-invalid</Code> prop
        </div>
        <DefaultFieldExample />
        <DefaultFieldExampleSnippet />
      </Container>
    </>
  );
}
