import Head from 'next/head';
import { Container } from '@/website/components/container';
import PricingTableSnippet from '@/packages/ecommerce/pricing-table/snippets/pricing-table.mdx';
import PricingTableExample from '@/packages/ecommerce/pricing-table/examples';

export default function PricingTablePage() {
  return (
    <>
      <Head>
        <title>E-Commerce Section</title>
        <meta
          name="description"
          content="Kimia-ui Ecommerce section provides ready templates that you can integrate on your commerce app"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/pricing-table"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Pricing Plans
        </h1>
        <PricingTableExample />
        <PricingTableSnippet />
      </Container>
    </>
  );
}
