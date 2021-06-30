import { FC } from 'react';
import Image from 'next/image';
import { Card, CardBody, CardText, CardTitle } from '../index';

const SingleCard: FC = () => (
  <div className="mb-12">
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
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card&apos;s content.
        </CardText>
      </CardBody>
    </Card>
  </div>
);

export default SingleCard;
