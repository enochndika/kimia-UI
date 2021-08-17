import Head from 'next/head';
import { Container } from '@/website/components/container';
import DefaultButtons from '@/packages/button/example/defaultButton';
import AnimateButtons from '@/packages/button/example/animateButton';
import RoundedButtons from '@/packages/button/example/RoundedButton';
import SizedButtons from '@/packages/button/example/SizedButton';
import DisabledButtons from '@/packages/button/example/disabledButton';
import OutlineButtons from '@/packages/button/example/outlineButton';
import DefaultButtonSnippet from '@/packages/button/snippets/default.mdx';
import AnimateButtonSnippet from '@/packages/button/snippets/animate.mdx';
import RoundedButtonSnippet from '@/packages/button/snippets/rounded.mdx';
import SizesButtonSnippet from '@/packages/button/snippets/sizes.mdx';
import DisabledButtonSnippet from '@/packages/button/snippets/disabled.mdx';
import OutlineButtonSnippet from '@/packages/button/snippets/outline.mdx';

export default function ButtonPage() {
  return (
    <>
      <Head>
        <title>Buttons</title>
        <meta
          name="description"
          content="Kimia-ui provides many variants of buttons component including rounded, animated, outline and fully customisable according to your need"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/components/buttons"
        />
      </Head>
      <Container>
        <h1 className="mb-16 mt-12 text-center text-gray-600 text-3xl font-bold md:text-5xl">
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
