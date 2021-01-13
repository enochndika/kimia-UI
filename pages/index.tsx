import Head from "next/head";
import DefaultButtons from "../components/general/button/defaultButton";
import {
  ColoredListGroupComponent,
  ListGroupComponent,
  ListGroupLinkComponent,
} from "../components/general/list-group";
export default function Home() {
  return (
    <>
      <Head>
        <title>Kimia-UI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultButtons />
      <ListGroupComponent />
      <ColoredListGroupComponent />
      <ListGroupLinkComponent />
    </>
  );
}
