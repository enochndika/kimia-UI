import Head from 'next/head';
import { DropdownComponent } from '../../components/dropdown';
import MobileLayout from '../../website/layout/mobile';
import { Container } from '@/website/components/container';

export default function DropdownPage() {
  return (
    <>
      <Head>
        <title>Dropdown</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Dropdown
        </h1>
        <DropdownComponent />
      </Container>
    </>
  );
}

DropdownPage.Layout = MobileLayout;
