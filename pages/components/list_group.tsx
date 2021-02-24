import Head from 'next/head';
import MobileLayout from '../../website/layout/mobile';
import { Container } from '../../website/container';
import {
  ColoredListGroupComponent,
  ListGroupComponent,
  ListGroupLinkComponent,
} from '../../components/list-group';

export default function ListGroupPage() {
  return (
    <>
      <Head>
        <title>List Group</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          List Group
        </h1>
        <ListGroupComponent />
        <ColoredListGroupComponent />
        <ListGroupLinkComponent />
      </Container>
    </>
  );
}

ListGroupPage.Layout = MobileLayout;
