import {
  SET_UNITS
} from "../actions/unitActions";

const CONFIG_URL = "./units.json"

export const fetchUnits = async () => {
  const response = await fetch(CONFIG_URL);
  return await response.json();
};

const initialState = {units: []}

const UnitsReducer = (state = initialState, action) => {
  switch (action?.type) {
  case SET_UNITS:
    return {
      ...state,
      units: action?.payload
    }
  default:
    return state;
  }
}

export default UnitsReducer;