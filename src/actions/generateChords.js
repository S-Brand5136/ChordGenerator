import {
  GENERATE_CHORDS_FAIL,
  GENERATE_CHORDS_REQUEST,
} from "../constants/ChordGeneratorConstants";
import { keys } from "../chordList";

export const generateChords = (chords, key, type) => async (dispatch) => {
  try {
    dispatch({ type: GENERATE_CHORDS_REQUEST });
  } catch (error) {
    dispatch({
      type: GENERATE_CHORDS_FAIL,
      payload: error,
    });
  }
};
