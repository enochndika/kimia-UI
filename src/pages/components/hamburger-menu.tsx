import Head from 'next/head';
import { Container } from '@/website/components/container';
import HamburgerMenuVariantOne from '@/packages/hamburger-menu/example/variantOne';
import HamburgerMenuVariantThree from '@/packages/hamburger-menu/example/variantThree';
import HamburgerMenuVariantTwo from '@/packages/hamburger-menu/example/variantTwo';
import HamburgerMenuVariantOneSnippet from '@/packages/hamburger-menu/snippets/variantOne.mdx';
import HamburgerMenuVariantTwoSnippet from '@/packages/hamburger-menu/snippets/variantTwo.mdx';
import HamburgerMenuVariantThreeSnippet from '@/packages/hamburger-menu/snippets/variantThree.mdx';

export default function HamburgerMenuPage() {
  return (
    <>
      <Head>
        <title>Hamburger Menu</title>
        <meta
          name="description"
          content="Kimia-ui Hamburger menu is a collapsible menu using a button placed in an upper corner of the menu that allows it to be toggled"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/hamburger-menu"
        />
      </Head>
      <Container>
        <h1 className="mb-20 mt-12 text-center text-gray-600 text-3xl font-bold md:text-5xl">
          Hamburger Menu
        </h1>
        <HamburgerMenuVariantOne />
        <HamburgerMenuVariantOneSnippet />
        <HamburgerMenuVariantTwo />
        <HamburgerMenuVariantTwoSnippet />
        <HamburgerMenuVariantThree />
        <HamburgerMenuVariantThreeSnippet />
      </Container>
    </>
  );
}
