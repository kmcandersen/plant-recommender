import axios from 'axios';

import {
  PLANT_LIST_REQUEST,
  PLANT_LIST_SUCCESS,
  PLANT_LIST_FAIL,
} from '../constants/plantConstants';

// action creator
export const listPlants = () => async (dispatch) => {
  try {
    dispatch({ type: PLANT_LIST_REQUEST });
    const { data } = await axios.get('/api/plants');
    dispatch({
      type: PLANT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PLANT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
