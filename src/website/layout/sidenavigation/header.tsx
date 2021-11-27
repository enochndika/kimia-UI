import Image from 'next/image';
import kimiaImg from '@/public/images/kimia.png';

const SidenavHeader = () => (
  <div className="top-0 flex mb-4 pl-4 bg-white lg:hidden">
    <Image src={kimiaImg} width={100} height={100} alt="kimia-UI" />
  </div>
);

export default SidenavHeader;
