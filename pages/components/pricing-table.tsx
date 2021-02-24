import Head from 'next/head';
import { Container } from '@/website/components/container';
import { PricingTable } from '@/components/ecommerce/pricing-table';
import MobileLayout from '@/website/layout/mobile';
import PricingTableSnippet from '@/website/snippets/ecommerce/pricing-table.mdx';

export default function PricingTablePage() {
  return (
    <>
      <Head>
        <title>E-Commerce Section</title>
        <meta
          name="description"
          content="Kimia-ui Ecommerce section provides ready templates that you can integrate on your commerce app"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Pricing Plans
        </h1>
        <PricingTable />
        <PricingTableSnippet />
      </Container>
    </>
  );
}

PricingTablePage.Layout = MobileLayout;
