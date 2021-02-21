import Image from 'next/image';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const Card = ({ children, className }: Props) => (
  <div
    className={`${className} relative flex flex-col border-2 border-gray-200 rounded-lg`}
  >
    {children}
  </div>
);

Card.Body = ({ children, className }: Props) => (
  <div className={`${className} block flex-grow flex-shrink p-5`}>
    {children}
  </div>
);

Card.Title = ({ children, className }: Props) => (
  <div className={`${className} font-medium text-gray-700 mb-3`}>
    {children}
  </div>
);

Card.Text = ({ children, className }: Props) => (
  <div className={`${className} text-gray-500`}>{children}</div>
);

export const SingleCard: FC = () => (
  <>
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-12 mb-3">
      Single Card
    </h2>
    <Card className="w-full md:w-4/12">
      <Image
        src="https://res.cloudinary.com/beloved/image/upload/v1608682938/Assets/632198_sgrp38.jpg"
        alt="image"
        width={1200}
        height={600}
        priority={true}
        className="max-w-full h-auto"
      />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </Card.Text>
      </Card.Body>
    </Card>
  </>
);

export const ThreeCard: FC = () => (
  <>
    <h2 className="font-bold text-gray-600 text-lg md:text-2xl mt-20 mb-3">
      3 Cards
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
  </>
);

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
