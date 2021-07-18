import Head from 'next/head';
import { Container } from '@/website/components/container';
import NavbarVariantOne from '@/packages/navbar/examples/variantOne';
import NavbarVariantTwo from '@/packages/navbar/examples/variantTwo';
import NavbarVariantThree from '@/packages/navbar/examples/variantThree';
import NavbarVariantOneSnippet from '@/packages/navbar/snippets/variantOne.mdx';
import NavbarVariantTwoSnippet from '@/packages/navbar/snippets/variantTwo.mdx';
import NavbarVariantThreeSnippet from '@/packages/navbar/snippets/variantThree.mdx';
import Table from '@/website/components/DocumentationTable';

export default function NavbarPage() {
  return (
    <>
      <Head>
        <title>Navbar</title>
        <meta
          name="description"
          content="Kimia-ui navbar component is a navigation header that is placed at the top of the page which allows to navigate in different pages"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/navbar"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-20 mt-12">
          Navbar
        </h1>
        <h2 className="font-bold text-gray-700 text-lg md:text-2xl mb-4">
          Please note
        </h2>
        <p className="mb-3 text-gray-700 text-sm">
          The navbar examples will not toggle on this site when the viewport is
          less than 1024px. This is done intentionally to prevent the
          navbar-items from displaying, as when the viewport is less than
          1024px, the navigation bar will be fixed and positioned at the top
          (top-0).
        </p>
        <p className="mb-12 text-gray-700 text-sm">
          For this reason, we can't display navbar-items to prevent all navbar
          examples from being displayed at the same position. But the snippets
          will work as expected when you use it. The navbar items will be
          displayed as a sidebar with a smooth transition.
        </p>
        <h2 className="font-bold text-gray-700 text-lg md:text-2xl mb-12">
          Components Props
        </h2>
        <h3 className="font-bold text-gray-700 text-lg md:text-lg mb-2 pl-2">
          Navbar
        </h3>
        <Table name="Navbar" />
        <h3 className="font-bold text-gray-700 text-lg mt-16 md:text-lg mb-2 pl-2">
          NavbarNav
        </h3>
        <Table name="NavbarNav" />
        <h3 className="font-bold text-gray-700 text-lg mt-16 md:text-lg mb-2 pl-2">
          NavbarLink
        </h3>
        <Table name="NavbarLink" />
        <div className="mb-16" />
        <NavbarVariantOne />
        <NavbarVariantOneSnippet />
        <NavbarVariantTwo />
        <NavbarVariantTwoSnippet />
        <NavbarVariantThree />
        <NavbarVariantThreeSnippet />
      </Container>
    </>
  );
}
