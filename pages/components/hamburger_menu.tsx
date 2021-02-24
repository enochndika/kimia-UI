import Head from 'next/head';
import { Container } from '@/website/components/container';
import { HamburgerMenuVariantOne } from '../../components/hamburger_menu/variantOne';
import MobileLayout from '../../website/layout/mobile';
import { HamburgerMenuVariantThree } from '../../components/hamburger_menu/variantThree';
import { HamburgerMenuVariantTwo } from '../../components/hamburger_menu/variantTwo';

export default function HamburgerMenuPage() {
  return (
    <>
      <Head>
        <title>Hamburger Menu</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-20 mt-12">
          Hamburger Menu
        </h1>
        <HamburgerMenuVariantOne />
        <div className="mb-16" />
        <HamburgerMenuVariantTwo />
        <div className="mb-16" />
        <HamburgerMenuVariantThree />
      </Container>
    </>
  );
}

HamburgerMenuPage.Layout = MobileLayout;
