import Head from 'next/head';
import { Container } from '@/website/container';
import MobileLayout from '@/website/layout/mobile';
import { HamburgerMenuVariantOne } from '@/components/hamburger-menu/example/variantOne';
import { HamburgerMenuVariantThree } from '@/components/hamburger-menu/example/variantThree';
import { HamburgerMenuVariantTwo } from '@/components/hamburger-menu/example/variantTwo';
import HamburgerMenuVariantOneSnippet from '@/components/hamburger-menu/snippets/variantOne.mdx';
import HamburgerMenuVariantTwoSnippet from '@/components/hamburger-menu/snippets/variantTwo.mdx';
import HamburgerMenuVariantThreeSnippet from '@/components/hamburger-menu/snippets/variantThree.mdx';

export default function HamburgerMenuPage() {
  return (
    <>
      <Head>
        <title>Hamburger Menu</title>
        <meta
          name="description"
          content="Kimia-ui Hamburger menu is a collapsible menu using a button placed in an upper corner of the menu that allows it to be toggled"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-20 mt-12">
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

HamburgerMenuPage.Layout = MobileLayout;
