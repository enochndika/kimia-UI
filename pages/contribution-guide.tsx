import Head from 'next/head';
import { Container } from '@/website/components/container';

const Code = ({ children }) => (
  <pre className="inline-block px-2 py-1 font-mono text-sm bg-gray-100 rounded">
    {children}
  </pre>
);

export default function ConfigurationPage() {
  return (
    <>
      <Head>
        <title>Contribution Guide</title>
        <meta
          name="description"
          content="Kimia ui is an open source project and is open to contributions. you can contribute by adding new components, fixing bugs or suggesting ideas"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/contribution-guide"
        />
      </Head>
      <Container>
        <div>
          <h1 className="mb-8 mt-12 text-gray-800 text-2xl font-bold md:text-3xl">
            Contribution
          </h1>
          <p className="mb-5 text-gray-600 md:mb-2.5">
            Kimia-ui is an open source project and anyone can contribute
          </p>
          <p className="mb-5 text-gray-600 md:mb-2.5">
            You can do it by adding new components, fixing bugs, grammar or
            improving accessibility.
          </p>
        </div>
        <h2 className="mt-16 text-gray-800 text-2xl font-bold md:text-3xl">
          How to contribute
        </h2>
        <div className="pl-6 py-6 text-gray-600">
          If you want to add a new component, please check out the{' '}
          <a
            className="text-blue-600"
            href="https://github.com/enochndika/kimia-UI/blob/main/contributing.md"
          >
            Contribution guide
          </a>
        </div>
        <ul className="mb-6 pl-6 text-gray-600 md:pl-12">
          <li className="mt-8 pb-4 list-decimal">
            Fork
            <a
              href="https://github.com/enochndika/kimia-UI"
              className="mx-1 font-bold"
            >
              this
            </a>{' '}
            repository to your own GitHub account and then clone it to your
            local device.
          </li>
          <li className="pb-4 list-decimal">
            Create a new branch <Code>git checkout -b MY_BRANCH_NAME</Code>
          </li>
          <li className="pb-4 list-decimal">
            Install yarn: <Code>npm install -g yarn</Code>
          </li>
          <li className="pb-4 list-decimal">
            Run <Code>yarn dev</Code> to build and watch for code changes
          </li>
          <li className="pb-4 list-decimal">
            Push your contribution to the branch you created{' '}
            <Code>git push origin MY_BRANCH_NAME</Code>
          </li>
          <li className="pb-4 list-decimal">
            Navigate to the original repository where you created your fork
          </li>
          <li className="pb-4 list-decimal">
            Click on <Code>Compare and pull request</Code> to view changes
          </li>
          <li className="pb-4 list-decimal">
            Then click on <Code>create pull request</Code>
          </li>
        </ul>
      </Container>
    </>
  );
}
