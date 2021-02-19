import Head from "next/head";
import { Container } from "../../site/container";
import {
  LargeSpinnerComponent,
  SpinnerComponent,
} from "../../components/spinner";
import MobileLayout from "../../site/layout/mobile";

export default function SpinnerPage() {
  return (
    <>
      <Head>
        <title>Spinner</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Spinner
        </h1>
        <SpinnerComponent />
        <LargeSpinnerComponent />
      </Container>
    </>
  );
}

SpinnerPage.Layout = MobileLayout;
