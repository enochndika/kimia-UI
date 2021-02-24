import Head from 'next/head';
import { Container } from '@/website/components/container';
import { PricingTable } from '../../components/ecommerce/pricing-table';
import MobileLayout from '../../website/layout/mobile';

export default function PricingTablePage() {
  return (
    <>
      <Head>
        <title>Pricing Table</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Pricing Plans
        </h1>
        <PricingTable />
      </Container>
    </>
  );
}

PricingTablePage.Layout = MobileLayout;
