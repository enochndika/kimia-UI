import Image from 'next/image';

const SidenavHeader = () => (
  <div className="top-0 flex mb-4 pl-4 bg-white lg:hidden">
    <Image
      src="/kimia.png"
      width={100}
      height={100}
      priority={true}
      alt="kimia-UI"
    />
  </div>
);

export default SidenavHeader;
