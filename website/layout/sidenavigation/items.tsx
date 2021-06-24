import Link from 'next/link';
import { useRouter } from 'next/router';

import data from '@/website/data/sidenavItems.json';

const style = {
  link: `flex font-medium items-center justify-start my-1 p-3 text-sm w-full hover:text-purple-800`,
  active: `text-purple-800 hover:text-purple-800`,
  inactive: `text-gray-900 hover:text-black`,
  section: `font-bold mb-3 pl-6 pb-2 text-gray-500 uppercase`,
};

const SidenavItems = () => {
  const { asPath } = useRouter();
  return (
    <li>
      {data.map((section) => (
        <div key={section.section} className="mb-12">
          <div key={section.section} className={style.section}>
            {section.section}
          </div>
          {section.content.map((item) => (
            <Link href={item.link} key={item.title}>
              <a
                className={`${style.link} 
                  ${item.link === asPath ? style.active : style.inactive}`}
              >
                <span className="mx-4">{item.title}</span>
              </a>
            </Link>
          ))}
        </div>
      ))}
    </li>
  );
};

export default SidenavItems;
