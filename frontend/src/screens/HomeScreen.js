import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import CardPopular from '../components/CardPopular';

const HomeScreen = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    const fetchPlants = async () => {
      const { data } = await axios.get('/api/plants');
      setPlants(data);
    };
    fetchPlants();
  }, []);
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
