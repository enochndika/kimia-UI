import Head from 'next/head';
import { Container } from '@/website/components/container';
import { HamburgerMenuVariantOne } from '@/components/hamburger-menu/example/variantOne';
import MobileLayout from '@/website/components/layout/mobile';
import { HamburgerMenuVariantThree } from '@/components/hamburger-menu/example/variantThree';
import { HamburgerMenuVariantTwo } from '@/components/hamburger-menu/example/variantTwo';
import HamburgerMenuVariantOneSnippet from '@/website/snippets/hamburger_menu/variantOne.mdx';
import HamburgerMenuVariantTwoSnippet from '@/website/snippets/hamburger_menu/variantTwo.mdx';
import HamburgerMenuVariantThreeSnippet from '@/website/snippets/hamburger_menu/variantThree.mdx';

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
