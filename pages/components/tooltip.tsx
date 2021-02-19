import Head from "next/head";
import { TooltipComponent } from "../../components/tooltip";
import MobileLayout from "../../site/layout/mobile";
import { Container } from "../../site/container";

export default function TooltipPage() {
  return (
    <>
      <Head>
        <title>Tooltip</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Tooltip
        </h1>
        <TooltipComponent />
      </Container>
    </>
  );
}

TooltipPage.Layout = MobileLayout;
