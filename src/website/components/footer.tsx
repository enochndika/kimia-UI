import ExternalLink from '@/website/components/externalLink';

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 pb-3 text-center text-sm">
        © {new Date().getFullYear()} Made with love by{' '}
        <ExternalLink className="font-semibold" href="https://enochndika.com">
          Enoch Ndika
        </ExternalLink>
      </div>
    </footer>
  );
}
