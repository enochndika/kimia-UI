import Head from "next/head";
import { Container } from "../../components/private/container";
import MobileLayout from "../../components/private/layout/mobile";
import {
  JumbotronComponent,
  JumbotronWithBackgroundComponent,
} from "../../components/prod/general/jumbotron";
import { Editor } from "../../helpers/editor";
import jumbotron from "../../snippets/general/jumbotron/simpleJummbotron";
import backgroundJumbotron from "../../snippets/general/jumbotron/backgroundJumbotron";

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
        <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-12 mb-6">
          Simple Jumbotron
        </h2>
        <JumbotronComponent />
        <Editor code={jumbotron} />
        <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-20 mb-6">
          Jumbotron with Background
        </h2>
        <JumbotronWithBackgroundComponent />
        <Editor code={backgroundJumbotron} />
      </Container>
    </>
  );
}

JumbotronPage.Layout = MobileLayout;
