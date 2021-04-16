import { FC } from 'react';
import Card from '../index';
import Image from 'next/image';

const MultipleCard: FC = () => (
  <div className="mb-12">
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-20 mb-3">
      Multiple Cards
    </h2>
    <div className="flex flex-wrap">
      <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
        <Card>
          <Image
            className="max-w-full h-auto md:h-48"
            src="https://res.cloudinary.com/beloved/image/upload/v1608683063/Assets/lamborghini_mxb2j7.jpg"
            alt="Bugatti"
            width={1200}
            height={800}
            priority={true}
          />
          <Card.Body>
            <Card.Title className="text-lg">Lamborghini</Card.Title>
            <Card.Text>
              Joe made the sugar cookies; Susan decorated them. When motorists
              sped in and out of traffic.
            </Card.Text>
            <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
              View Details
              <ArrowIcon />
            </a>
          </Card.Body>
        </Card>
      </div>
      <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
        <Card>
          <Image
            className="max-w-full h-auto md:h-48"
            src="https://res.cloudinary.com/beloved/image/upload/v1608683147/Assets/bugatti-cars-7-free-car-hd-wallpaper_j4xyj6.jpg"
            alt="Bugatti"
            width={1200}
            height={800}
          />
          <Card.Body>
            <Card.Title className="text-lg">Bugatti</Card.Title>
            <Card.Text>
              Joe made the sugar cookies; Susan decorated them. When motorists
              sped in and out of traffic.
            </Card.Text>
            <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
              View Details
              <ArrowIcon />
            </a>
          </Card.Body>
        </Card>
      </div>
      <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
        <Card>
          <Image
            className="max-w-full h-auto md:h-48"
            src="https://res.cloudinary.com/beloved/image/upload/v1599343428/Assets/3_znyzrd.jpg"
            alt="blog"
            width={1200}
            height={800}
          />
          <Card.Body>
            <Card.Title className="text-lg">Computer</Card.Title>
            <Card.Text>
              Joe made the sugar cookies; Susan decorated them. When motorists
              sped in and out of traffic.
            </Card.Text>
            <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
              View Details
              <ArrowIcon />
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
);

export default MultipleCard;

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 ml-2"
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
