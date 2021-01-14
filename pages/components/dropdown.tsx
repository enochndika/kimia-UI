import Head from "next/head";
import { DropdownComponent } from "../../components/general/dropdown";
import MobileLayout from "../../site/layout/mobile";
import { Container } from "../../site/container";

export default function DropdownPage() {
  return (
    <>
      <Head>
        <title>Dropdown</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Dropdown
        </h1>
        <DropdownComponent />
      </Container>
    </>
  );
}

DropdownPage.Layout = MobileLayout;
