import Head from 'next/head';
import Layout from '@/website/layout/default';
import { Container } from '@/website/container';
import DefaultButtons from '@/components/button/example/defaultButton';
import AnimateButtons from '@/components/button/example/animateButton';
import RoundedButtons from '@/components/button/example/RoundedButton';
import SizedButtons from '@/components/button/example/SizedButton';
import DisabledButtons from '@/components/button/example/disabledButton';
import OutlineButtons from '@/components/button/example/outlineButton';
import DefaultButtonSnippet from '@/components/button/snippets/default.mdx';
import AnimateButtonSnippet from '@/components/button/snippets/animate.mdx';
import RoundedButtonSnippet from '@/components/button/snippets/rounded.mdx';
import SizesButtonSnippet from '@/components/button/snippets/sizes.mdx';
import DisabledButtonSnippet from '@/components/button/snippets/disabled.mdx';
import OutlineButtonSnippet from '@/components/button/snippets/outline.mdx';

export default function ButtonPage() {
  return (
    <>
      <Head>
        <title>Buttons</title>
        <meta
          name="description"
          content="Kimia-ui provides many variants of buttons component including rounded, animated, outline and fully customisable according to your need"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Buttons
        </h1>
        <DefaultButtons />
        <DefaultButtonSnippet />
        <AnimateButtons />
        <AnimateButtonSnippet />
        <RoundedButtons />
        <RoundedButtonSnippet />
        <SizedButtons />
        <SizesButtonSnippet />
        <DisabledButtons />
        <DisabledButtonSnippet />
        <OutlineButtons />
        <OutlineButtonSnippet />
      </Container>
    </>
  );
}

ButtonPage.Layout = Layout;
