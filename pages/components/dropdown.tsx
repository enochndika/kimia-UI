import Head from 'next/head';
import { Container } from '@/website/components/container';
import BasicDropdownSnippet from '@/packages/dropdown/snippets/basic.mdx';
import DropdownWithSeparatorSnippet from '@/packages/dropdown/snippets/with-separator.mdx';
import BasicDropdown from '@/packages/dropdown/example/basic';
import DropdownWithSeparator from '@/packages/dropdown/example/with-divider';

export default function DropdownPage() {
  return (
    <>
      <Head>
        <title>Dropdown</title>
        <meta
          name="description"
          content="Kimia-ui Dropdown allows the user to choose one value from a list. When a drop-down list is active, it displays a list of values"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/dropdown"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Dropdown
        </h1>
        <div className="mb-16 text-gray-800">
          * You can also close dropdown with <strong>ESC</strong> key
        </div>
        <BasicDropdown />
        <BasicDropdownSnippet />
        <DropdownWithSeparator />
        <DropdownWithSeparatorSnippet />
      </Container>
    </>
  );
}
