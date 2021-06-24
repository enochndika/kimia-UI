import Image from 'next/image';

const SidenavHeader = () => (
  <div className="bg-white flex pl-4 mb-4 top-0 lg:hidden">
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
