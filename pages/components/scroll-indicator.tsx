import Head from 'next/head';
import { Container } from '../../website/container';
import MobileLayout from '../../website/layout/mobile';
import { ScrollIndicator } from '../../components/scrollIndicator';

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
