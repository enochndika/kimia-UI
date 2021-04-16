import Head from 'next/head';
import { Container } from '@/website/components/container';
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
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-20 mt-12">
          Navbar
        </h1>
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
