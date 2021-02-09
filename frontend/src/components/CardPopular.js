import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const CardPopular = ({ plant }) => {
  return (
    <Card className='rounded h-100'>
      <a href={`/plant/${plant._id}`}>
        <Card.Img
          src={`/images/plants/${plant.image}`}
          variant='top'
          alt={`${plant.commonName} photo`}
        />
      </a>
      <Card.Body>
        <a href={`/plant/${plant._id}`}>
          <Card.Title as='div'>
            <strong>{plant.commonName}</strong>
          </Card.Title>
        </a>
        <Card.Subtitle as='div'>{plant.scientificName}</Card.Subtitle>
        <Card.Text as='div'>
          <Rating value={plant.rating} text={`${plant.numReviews} reviews`} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardPopular;
