import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import plants from '../plants';

const PlantScreen = ({ match }) => {
  const plant = plants.find((p) => p._id === match.params.id);

  let lightIcon = '';
  let lightLabel = '';
  const lightInfo = (light) => {
    switch (light) {
      case 'full sun':
        lightIcon = 'fa-sun';
        lightLabel = 'Full Sun';
        break;
      case 'full sun/partial shade':
        lightIcon = 'fa-cloud-sun';
        lightLabel = 'Full sun/Partial shade';
        break;
      case 'full sun/partial shade':
        lightIcon = 'fa-cloud-sun';
        lightLabel = 'Partial shade/Shade';
        break;
      case 'full shade':
        lightIcon = 'fa-cloud';
        lightLabel = 'Full Shade';
        break;
      default:
        lightLabel = 'NA';
    }
  };
  lightInfo(plant.light);

  const rangeLabel = (attr) => {
    if (!attr.min) {
      return 'NA';
    } else if (attr.min === attr.max) {
      return `${attr.min} in`;
    } else {
      return `${attr.min} in - ${attr.max} in`;
    }
  };

  return (
    <div>
      <Link className='btn btn-light my-3' to='/'>
        Back
      </Link>
      <Row>
        <Col md={4} className='plant__image'>
          <Image
            src={`/images/plants/${plant.image1.src}`}
            alt={`${plant.commonName} photo`}
            fluid
          />
        </Col>

        <Col md={8}>
          <div>
            <h3 className='plant__title'>{plant.commonName}</h3>
          </div>
          <div>
            <p className='plant__subtitle'>{plant.scientificName}</p>
          </div>
          <div className='mt-2 plant__reviews'>
            <Rating value={plant.rating} text={`${plant.numReviews} reviews`} />
          </div>
          <div id='plant__toggle-collection'>
            <button type='button'>
              <i class='fas fa-plus-circle'></i>
            </button>
            <p>Add to Collection</p>
          </div>
          <div className='mt-4 plant__details'>
            <p>SPACING: {rangeLabel(plant.spacingIn)}</p>
            <p>MATURE HEIGHT: {rangeLabel(plant.heightIn)}</p>
            <p className='plant__bloom'>BLOOM SEASON: {plant.bloomSeason}</p>
            <div className='plant__light'>
              <i className={`fas ${lightIcon}`}></i>
              <p>{lightLabel}</p>
            </div>
          </div>

          <div className='my-4 plant__desc'>
            {plant.description.text}
            <div className='my-4'>
              <Button
                href={plant.description.url}
                className='btn btn-light'
                type='button'
              >
                More
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PlantScreen;
