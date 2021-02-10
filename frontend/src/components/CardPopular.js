import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const CardPopular = ({ plant }) => {
  return (
    <Card className='rounded h-100'>
      <Link to={`/plant/${plant._id}`}>
        <Card.Img
          src={`/images/plants/${plant.image1.src}`}
          variant='top'
          alt={`${plant.commonName} photo`}
        />
      </Link>
      <Card.Body>
        <Link to={`/plant/${plant._id}`}>
          <Card.Title as='div'>
            <strong>{plant.commonName}</strong>
          </Card.Title>
        </Link>
        <Card.Subtitle as='div'>{plant.scientificName}</Card.Subtitle>
        <Card.Text as='div'>
          <Rating value={plant.rating} text={`${plant.numReviews} reviews`} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardPopular;
