import Head from 'next/head';
import MobileLayout from '@/website/layout/mobile';
import { Container } from '@/website/container';
import BasicDropdownSnippet from '@/components/dropdown/snippets/basic.mdx';
import DropdownWithSeparatorSnippet from '@/components/dropdown/snippets/with-separator.mdx';
import { BasicDropdown } from '@/components/dropdown/example/basic';
import { DropdownWithSeparator } from '@/components/dropdown/example/with-separator';

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
        <BasicDropdown />
        <BasicDropdownSnippet />
        <DropdownWithSeparator />
        <DropdownWithSeparatorSnippet />
      </Container>
    </>
  );
}

DropdownPage.Layout = MobileLayout;
