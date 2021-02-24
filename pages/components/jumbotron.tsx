import Head from 'next/head';
import {
  JumbotronComponent,
  JumbotronWithBackgroundComponent,
} from '../../components/jumbotron';
import { Container } from '@/website/components/container';
import MobileLayout from '../../website/layout/mobile';

export default function JumbotronPage() {
  return (
    <>
      <Head>
        <title>Jumbotron</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Jumbotron
        </h1>
        <JumbotronComponent />
        <JumbotronWithBackgroundComponent />
      </Container>
    </>
  );
}

JumbotronPage.Layout = MobileLayout;
