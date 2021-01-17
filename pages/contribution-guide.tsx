import Head from "next/head";
import Layout from "../site/layout/desktop";
import { Container } from "../site/container";

const Code = ({ children }) => (
  <pre className="inline-block font-mono text-sm py-1 px-2 bg-gray-100 rounded">
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
      </Head>
      <Container>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800  mb-8">
            Contribution
          </h1>
          <p className="mb-5 md:mb-2.5 text-gray-600">
            Kimia-ui is an open source project and anyone can contribute
          </p>
          <p className="mb-5 md:mb-2.5 text-gray-600">
            You can do it by adding new components, fixing bugs or suggesting
            ideas
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800  mt-16">
          How to contribute
        </h2>
        <ul className="text-gray-600 pl-6 md:pl-12 mb-6">
          <li className="list-decimal mt-8 pb-4">
            Fork
            <a
              href="https://github.com/enochndika/kimia-UI"
              className="font-bold mx-1"
            >
              this
            </a>{" "}
            repository to your own GitHub account and then clone it to your
            local device.
          </li>
          <li className="list-decimal pb-4">
            Create a new branch <Code>git checkout -b MY_BRANCH_NAME</Code>
          </li>
          <li className="list-decimal pb-4">
            Install yarn: <Code>npm install -g yarn</Code>
          </li>
          <li className="list-decimal pb-4">
            Run <Code>yarn dev</Code> to build and watch for code changes
          </li>
          <li className="list-decimal pb-4">
            Push your contribution to the branch you created{" "}
            <Code>git push origin MY_BRANCH_NAME</Code>
          </li>
          <li className="list-decimal pb-4">
            Navigate to the original repository where you created your fork
          </li>
          <li className="list-decimal pb-4">
            Click on <Code>Compare and pull request</Code> to view changes
          </li>
          <li className="list-decimal pb-4">
            Then click on <Code>create pull request</Code>
          </li>
        </ul>
      </Container>
    </>
  );
}

ConfigurationPage.Layout = Layout;
