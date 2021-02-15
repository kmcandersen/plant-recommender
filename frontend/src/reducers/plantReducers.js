import {
  PLANT_LIST_REQUEST,
  PLANT_LIST_SUCCESS,
  PLANT_LIST_FAIL,
} from '../constants/plantConstants';

export const plantListReducer = (state = { plants: [] }, action) => {
  switch (action.type) {
    case PLANT_LIST_REQUEST:
      return { loading: true, plants: [] };
    case PLANT_LIST_SUCCESS:
      return { loading: false, plants: action.payload };
    case PLANT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
