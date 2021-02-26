import Head from 'next/head';
import { Container } from '@/website/components/container';
import MobileLayout from '@/website/components/layout/mobile';
import TabVariantOneSnippet from '@/components/tab/snippets/variantOne.mdx';
import TabVariantTwoSnippet from '@/components/tab/snippets/variantTwo.mdx';
import TabVariantThreeSnippet from '@/components/tab/snippets/variantThree.mdx';
import {
  TabVariantOne,
  TabVariantThree,
  TabVariantTwo,
} from '@/components/tab/example';

export default function TabPage() {
  return (
    <>
      <Head>
        <title>Tab</title>
        <meta
          name="description"
          content="Kimia-ui Tab component allows the user to organize content within multiple tabs and set the first tab as active"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Tab
        </h1>
        <TabVariantOne />
        <TabVariantOneSnippet />
        <TabVariantTwo />
        <TabVariantTwoSnippet />
        <TabVariantThree />
        <TabVariantThreeSnippet />
      </Container>
    </>
  );
}

TabPage.Layout = MobileLayout;
