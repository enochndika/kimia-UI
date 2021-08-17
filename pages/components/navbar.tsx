import Head from 'next/head';
import { Container } from '@/website/components/container';
import Table from '@/website/components/DocumentationTable';
import NavbarVariantOne from '@/packages/navbar/examples/variantOne';
import NavbarVariantTwo from '@/packages/navbar/examples/variantTwo';
import NavbarVariantThree from '@/packages/navbar/examples/variantThree';
import NavbarVariantOneSnippet from '@/packages/navbar/snippets/variantOne.mdx';
import NavbarVariantTwoSnippet from '@/packages/navbar/snippets/variantTwo.mdx';
import NavbarVariantThreeSnippet from '@/packages/navbar/snippets/variantThree.mdx';

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
        <h1 className="mb-20 mt-12 text-center text-gray-600 text-3xl font-bold md:text-5xl">
          Navbar
        </h1>
        <h2 className="mb-4 text-gray-700 text-lg font-bold md:text-2xl">
          Please note
        </h2>
        <div className="text-gray-700">
          <p className="mb-3">
            The navbar examples will not toggle on this site when the viewport
            is less than 1024px. This is done intentionally to prevent the
            navbar-items from displaying, as when the viewport is less than
            1024px, the navigation bar will be fixed and positioned at the top
            (top-0).
          </p>
          <p className="mb-12">
            For this reason, we can't display navbar-items to prevent all navbar
            examples from being displayed at the same position. But the snippets
            will work as expected when you use it. The navbar items will be
            displayed as a sidebar with a smooth transition.
          </p>
        </div>
        <h2 className="mb-12 text-gray-700 text-lg font-bold md:text-2xl">
          Components Props
        </h2>
        <h3 className="mb-2 pl-2 text-gray-700 text-lg font-bold md:text-lg">
          Navbar
        </h3>
        <Table name="Navbar" />
        <h3 className="mb-2 mt-16 pl-2 text-gray-700 text-lg font-bold md:text-lg">
          NavbarNav
        </h3>
        <Table name="NavbarNav" />
        <h3 className="mb-2 mt-16 pl-2 text-gray-700 text-lg font-bold md:text-lg">
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
