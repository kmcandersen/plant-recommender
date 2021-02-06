import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CardPopular from '../components/CardPopular';
import plants from '../plants.js';

const HomeScreen = () => {
  return (
    <>
      <h2>Most Popular</h2>
      <Row className='my-5'>
        {plants.map((plant) => (
          <Col xs={12} md={6} lg={3} key={plant._id} className='mb-4'>
            <CardPopular plant={plant} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
