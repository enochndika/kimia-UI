import Head from 'next/head';
import { DropdownComponent } from '@/components/dropdown';
import MobileLayout from '../../website/layout/mobile';
import { Container } from '@/website/components/container';
import DropdownExample from '../../website/snippets/dropdown/index.mdx';
import { CodeWrapper } from '@/website/components/codeWrapper';

export default function DropdownPage() {
  return (
    <>
      <Head>
        <title>Dropdown</title>
        <meta
          name="description"
          content="Kimia-ui Dropdown allows the user to choose one value from a list. When a drop-down list is active, it displays a list of values"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Dropdown
        </h1>
        <DropdownComponent />
        <CodeWrapper>
          <DropdownExample />
        </CodeWrapper>
      </Container>
    </>
  );
}

DropdownPage.Layout = MobileLayout;
