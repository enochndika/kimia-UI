import Head from 'next/head';
import { Container } from '@/website/container';
import MobileLayout from '@/website/layout/mobile';
import { NavbarVariantOne } from '@/components/navbar/examples/variantOne';
import { NavbarVariantTwo } from '@/components/navbar/examples/variantTwo';
import { NavbarVariantThree } from '@/components/navbar/examples/variantThree';
import NavbarVariantOneSnippet from '@/components/navbar/snippets/variantOne.mdx';
import NavbarVariantTwoSnippet from '@/components/navbar/snippets/variantTwo.mdx';
import NavbarVariantThreeSnippet from '@/components/navbar/snippets/variantThree.mdx';

export default function NavbarPage() {
  return (
    <>
      <Head>
        <title>Navbar</title>
        <meta
          name="description"
          content="Kimia-ui navbar component is a navigation header that is placed at the top of the page which allows to navigate in different pages"
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

NavbarPage.Layout = MobileLayout;
