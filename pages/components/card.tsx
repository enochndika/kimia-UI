import Head from 'next/head';
import { Container } from '../../website/container';
import { SingleCard, ThreeCard } from '../../components/card';
import MobileLayout from '../../website/layout/mobile';

export default function CardPage() {
  return (
    <>
      <Head>
        <title>Card</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Card
        </h1>
        <SingleCard />
        <ThreeCard />
      </Container>
    </>
  );
}

CardPage.Layout = MobileLayout;
