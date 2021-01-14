import Head from "next/head";
import { Container } from "../../site/container";
import MobileLayout from "../../site/layout/mobile";
import { ScrollIndicator } from "../../components/extra/scrollIndicator";

export default function ScrollIndicatorPage() {
  return (
    <>
      <Head>
        <title>Scroll Indicator</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Scroll Indicator
        </h1>
        <ScrollIndicator />
      </Container>
    </>
  );
}

ScrollIndicatorPage.Layout = MobileLayout;
