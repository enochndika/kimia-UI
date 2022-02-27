import Head from 'next/head';
import Image from 'next/image';
import dashV4 from '@/public/images/dashv4.jpg';
import dashv9 from '@/public/images/dashv9.png';
import { Container } from '@/website/components/container';
import ExternalLink from '@/website/components/externalLink';

export default function DashboardsPage() {
  return (
    <>
      <Head>
        <title>Dashboards</title>
        <meta
          name="description"
          content="Free dashboards fully customizable, easy to use with good documentation"
        />
        <link
          rel="canonical"
          href="https://kimia-ui.vercel.app/templates/dashboards"
        />
      </Head>
      <Container>
        <div className="text-gray-900 font-medium">
          <h1 className="mb-16 mt-12 text-center text-gray-600 text-3xl font-bold md:text-5xl">
            Dashboards
          </h1>
          <div className="flex flex-wrap justify-center md:space-x-4">
            <div className="w-full md:w-5/12">
              <ExternalLink href="https://www.salvia-kit.com/dashboard-v4">
                <Image
                  src={dashV4}
                  height={600}
                  width={1080}
                  placeholder="blur"
                  alt="Salvia-kit Dashboard v4"
                />
              </ExternalLink>
            </div>
            <div className="w-full md:w-5/12">
              <ExternalLink href="https://www.salvia-kit.com/dashboard-v9">
                <Image
                  src={dashv9}
                  height={600}
                  width={1080}
                  placeholder="blur"
                  alt="Salvia-kit Dashboard v9"
                />
              </ExternalLink>
            </div>
          </div>
          <section className="mb-12 mt-8">
            <p className="mb-3">
              I decided to separate components and dashboard templates in two
              different websites in order not to overload this one. So I created{' '}
              <a href="https://salvia-kit.com" className="text-blue-700">
                Salvia-kit
              </a>{' '}
              where you can find beautiful dashboards, totally free, built with
              Tailwind CSS.
            </p>
            <p>
              Salvia-kit provides 8 dashboards templates for React
              (create-react-app), Next.js, Svelte, Vue(vite.js) and Nuxt. Each
              dashboard contains detailed documentation for each technology.
              They are fully customizable.
            </p>
          </section>
          <h2 className="mb-6 text-gray-600 text-lg font-bold md:text-2xl">
            No vendor lock-in
          </h2>
          <section className="pb-12">
            <p className="mb-3">
              <a href="https://salvia-kit.com" className="text-blue-700">
                Salvia-kit
              </a>{' '}
              is created to solve a problem I often encountered when using
              dashboards owned by third party developers or companies. that is
              vendor lock-in.
            </p>
            <p className="mb-3">
              These dashboards often contained many configurations with several
              scripts, which still did not allow to export them and integrate
              them easily into an existing project. Therefore, it was always
              necessary to use the repository provided by the owner of the
              dashboard.
            </p>
            <p>
              This is what motivated me to create dashboards that can be easily
              integrated into existing projects with simple, readable code and
              documentation designed for developers.
            </p>
          </section>
        </div>
      </Container>
    </>
  );
}
