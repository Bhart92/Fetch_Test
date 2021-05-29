import { FETCH_DATA } from '../actions/types';

const initialState = [];

export default function data(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA:
      return [...state, payload];
    default:
      return state;
  };
};