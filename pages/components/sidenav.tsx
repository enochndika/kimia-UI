import Head from 'next/head';
import { Container } from '../../site/container';
import { SidenavLeft } from '../../components/sidenav/sidenavLeft';
import { SidenavRight } from '../../components/sidenav/sidenavRight';
import MobileLayout from '../../site/layout/mobile';

export default function SidenavPage() {
  return (
    <>
      <Head>
        <title>Sidenav</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Sidenav
        </h1>
        <SidenavLeft />
        <SidenavRight />
      </Container>
    </>
  );
}

SidenavPage.Layout = MobileLayout;
