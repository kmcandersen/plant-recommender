import React from 'react';
import { Card } from 'react-bootstrap';

const CardPopular = ({ plant }) => {
  return (
    <Card className='rounded h-100'>
      <a href={`/plant/${plant._id}`}>
        <Card.Img
          src={`/images/${plant.image}`}
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
        <Card.Text as='div'>
          <div className='my-3'>
            {plant.rating} from {plant.numReviews} reviews
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardPopular;
