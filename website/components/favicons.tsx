import favicons from '../data/favicons.json';

export default function Favicons() {
  return (
    <>
      {favicons.map((item) => (
        <link
          key={item.sizes}
          rel={item.rel}
          type={item.type || ''}
          sizes={item.sizes}
          href={item.href}
        />
      ))}
    </>
  );
}
