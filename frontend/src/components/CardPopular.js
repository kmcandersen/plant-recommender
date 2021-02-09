import React from 'react';
import { createStarString } from '../utils/helpers.js';
import { Card } from 'react-bootstrap';
//renders HTML string in React
import parse from 'html-react-parser';

const CardPopular = ({ plant }) => {
  let starString = createStarString(plant.rating);
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
          <div className='d-flex mt-3 card__body-reviews'>
            <div>{parse(starString)}</div>{' '}
            <p className='ml-2'>{plant.numReviews} reviews</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardPopular;
