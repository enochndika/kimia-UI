import Head from 'next/head';
import { CollapseComponent } from '../../components/collapse';
import MobileLayout from '../../site/layout/mobile';
import { Container } from '../../site/container';

export default function CollapsePage() {
  return (
    <>
      <Head>
        <title>Collapse</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Collapse
        </h1>
        <CollapseComponent />
      </Container>
    </>
  );
}

CollapsePage.Layout = MobileLayout;
