import { FC } from 'react';
import { Card, CardBody, CardTitle, CardText } from '../card';
import Image from 'next/image';

const MultipleCard: FC = () => (
  <div className="mb-12">
    <h2 className="mb-3 mt-20 text-gray-600 text-lg font-bold md:text-2xl">
      Multiple Cards
    </h2>
    <div className="flex flex-wrap">
      <div className="mb-6 w-full md:mb-0 md:p-3 md:w-4/12">
        <Card>
          <Image
            className="max-w-full h-auto md:h-48"
            src="https://res.cloudinary.com/beloved/image/upload/v1608683063/Assets/lamborghini_mxb2j7.jpg"
            alt="Bugatti"
            width={1200}
            height={800}
            priority={true}
          />
          <CardBody>
            <CardTitle className="text-lg">Lamborghini</CardTitle>
            <CardText>
              Joe made the sugar cookies; Susan decorated them. When motorists
              sped in and out of traffic.
            </CardText>
            <a className="inline-flex items-center mt-4 text-indigo-500 cursor-pointer">
              View Details
              <ArrowIcon />
            </a>
          </CardBody>
        </Card>
      </div>
      <div className="mb-6 w-full md:mb-0 md:p-3 md:w-4/12">
        <Card>
          <Image
            className="max-w-full h-auto md:h-48"
            src="https://res.cloudinary.com/beloved/image/upload/v1608683147/Assets/bugatti-cars-7-free-car-hd-wallpaper_j4xyj6.jpg"
            alt="Bugatti"
            width={1200}
            height={800}
          />
          <CardBody>
            <CardTitle className="text-lg">Bugatti</CardTitle>
            <CardText>
              Joe made the sugar cookies; Susan decorated them. When motorists
              sped in and out of traffic.
            </CardText>
            <a className="inline-flex items-center mt-4 text-indigo-500 cursor-pointer">
              View Details
              <ArrowIcon />
            </a>
          </CardBody>
        </Card>
      </div>
      <div className="mb-6 w-full md:mb-0 md:p-3 md:w-4/12">
        <Card>
          <Image
            className="max-w-full h-auto md:h-48"
            src="https://res.cloudinary.com/beloved/image/upload/v1599343428/Assets/3_znyzrd.jpg"
            alt="blog"
            width={1200}
            height={800}
          />
          <CardBody>
            <CardTitle className="text-lg">Computer</CardTitle>
            <CardText>
              Joe made the sugar cookies; Susan decorated them. When motorists
              sped in and out of traffic.
            </CardText>
            <a className="inline-flex items-center mt-4 text-indigo-500 cursor-pointer">
              View Details
              <ArrowIcon />
            </a>
          </CardBody>
        </Card>
      </div>
    </div>
  </div>
);

export default MultipleCard;

const ArrowIcon = () => (
  <svg
    className="ml-2 w-4 h-4"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);
