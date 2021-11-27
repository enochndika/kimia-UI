import Head from 'next/head';
import { Container } from '@/website/components/container';
import TabVariantOne from '@/packages/tab/example/variantOne';
import TabVariantTwo from '@/packages/tab/example/variantTwo';
import TabVariantThree from '@/packages/tab/example/variantThree';
import TabVariantOneSnippet from '@/packages/tab/snippets/variantOne.mdx';
import TabVariantTwoSnippet from '@/packages/tab/snippets/variantTwo.mdx';
import TabVariantThreeSnippet from '@/packages/tab/snippets/variantThree.mdx';

export default function TabPage() {
  return (
    <>
      <Head>
        <title>Tab</title>
        <meta
          name="description"
          content="Kimia-ui Tab component allows the user to organize content within multiple tabs and set the first tab as active"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/tab"
        />
      </Head>
      <Container>
        <h1 className="mb-16 mt-12 text-center text-gray-600 text-3xl font-bold md:text-5xl">
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
