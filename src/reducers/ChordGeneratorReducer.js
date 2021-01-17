import {
  GENERATE_CHORDS_FAIL,
  GENERATE_CHORDS_REQUEST,
  GENERATE_CHORDS_SUCCESS,
} from "../constants/ChordGeneratorConstants";

export const generateReducer = (state = {}, action) => {
  switch (action.type) {
    case GENERATE_CHORDS_REQUEST:
      return { loading: true };
    case GENERATE_CHORDS_SUCCESS:
      return { loading: false, generatedChords: action.payload };
    case GENERATE_CHORDS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
