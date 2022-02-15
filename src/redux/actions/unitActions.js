import {fetchUnits} from "../reducers/unitsReducer";

export const SET_UNITS = "SET_UNITS";

export const setUnits = () => async dispatch => {
  const units = await fetchUnits();

  if (units instanceof Error) {
    return;
  }
  dispatch({
    type: SET_UNITS,
    payload: units?.units,
  });
};