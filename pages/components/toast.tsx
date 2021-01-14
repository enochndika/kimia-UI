import Head from "next/head";
import { Container } from "../../site/container";
import MobileLayout from "../../site/layout/mobile";
import { ToastContainer } from "../../components/extra/toast/example";

export default function ToastPage() {
  return (
    <>
      <Head>
        <title>Toast</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Toast
        </h1>
        <ToastContainer />
      </Container>
    </>
  );
}

ToastPage.Layout = MobileLayout;
