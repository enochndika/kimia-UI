import Head from 'next/head';
import { Container } from '@/website/components/container';
import { NavbarVariantOne } from '../../components/navbar/variantOne';
import { NavbarVariantTwo } from '../../components/navbar/variantTwo';
import { NavbarVariantThree } from '../../components/navbar/variantThree';
import MobileLayout from '../../website/layout/mobile';

export default function NavbarPage() {
  return (
    <>
      <Head>
        <title>Navbar</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-20 mt-12">
          Navbar
        </h1>
        <NavbarVariantOne />
        <div className="mb-12" />
        <NavbarVariantTwo />
        <div className="mb-12" />
        <NavbarVariantThree />
        <div className="mb-6" />
      </Container>
    </>
  );
}

NavbarPage.Layout = MobileLayout;
