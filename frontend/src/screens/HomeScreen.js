import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import CardPopular from '../components/CardPopular';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { listPlants } from '../actions/plantActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const plantList = useSelector((state) => state.plantList);
  const { loading, error, plants } = plantList;

  useEffect(() => {
    dispatch(listPlants());
  }, [dispatch]);

  return (
    <>
      <h2>Most Popular</h2>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row className='my-5'>
          {plants.map((plant) => (
            <Col xs={12} md={6} lg={3} key={plant._id} className='mb-4'>
              <CardPopular plant={plant} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
