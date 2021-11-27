import { FC } from 'react';
import Image from 'next/image';
import { Card, CardBody, CardText, CardTitle } from '../card';

const SingleCard: FC = () => (
  <div className="mb-12">
    <h2 className="mb-3 mt-12 text-gray-600 text-lg font-bold md:text-2xl">
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
