import Head from 'next/head';
import { Container } from '@/website/components/container';
import MobileLayout from '../../website/layout/mobile';
import DefaultButtons from '../../components/button/defaultButton';
import AnimateButtons from '../../components/button/animateButton';
import RoundedButtons from '../../components/button/RoundedButton';
import SizedButtons from '../../components/button/SizedButton';
import DisabledButtons from '../../components/button/disabledButton';
import OutlineButtons from '../../components/button/outlineButton';
import { CodeWrapper } from '@/website/components/codeWrapper';
import DefaultButtonExample from '../../website/snippets/buttons/default.mdx';
import AnimateButtonExample from '../../website/snippets/buttons/animate.mdx';
import RoundedButtonExample from '../../website/snippets/buttons/rounded.mdx';
import SizesButtonExample from '../../website/snippets/buttons/sizes.mdx';
import DisabledButtonExample from '../../website/snippets/buttons/disabled.mdx';
import OutlineButtonExample from '../../website/snippets/buttons/outline.mdx';

export default function ButtonPage() {
  return (
    <>
      <Head>
        <title>Buttons</title>
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Buttons
        </h1>
        <DefaultButtons />
        <CodeWrapper>
          <DefaultButtonExample />
        </CodeWrapper>
        <AnimateButtons />
        <CodeWrapper>
          <AnimateButtonExample />
        </CodeWrapper>
        <RoundedButtons />
        <CodeWrapper>
          <RoundedButtonExample />
        </CodeWrapper>
        <SizedButtons />
        <CodeWrapper>
          <SizesButtonExample />
        </CodeWrapper>
        <DisabledButtons />
        <CodeWrapper>
          <DisabledButtonExample />
        </CodeWrapper>
        <OutlineButtons />
        <CodeWrapper>
          <OutlineButtonExample />
        </CodeWrapper>
      </Container>
    </>
  );
}

ButtonPage.Layout = MobileLayout;
