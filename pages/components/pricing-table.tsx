import Head from "next/head";
import { Container } from "../../site/container";
import { PricingTable } from "../../components/extra/ecommerce/pricing-table";
import MobileLayout from "../../site/layout/mobile";

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
