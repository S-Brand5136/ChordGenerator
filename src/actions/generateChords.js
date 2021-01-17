import {
  GENERATE_CHORDS_FAIL,
  GENERATE_CHORDS_REQUEST,
  GENERATE_CHORDS_SUCCESS,
} from "../constants/ChordGeneratorConstants";
import { keys } from "../chordList";

export const generateChords = (chords, key) => async (dispatch) => {
  try {
    dispatch({ type: GENERATE_CHORDS_REQUEST });

    let randomizedChords = shuffle(chords);
    randomizedChords = match(randomizedChords, key);

    dispatch({
      type: GENERATE_CHORDS_SUCCESS,
      payload: { chords: randomizedChords, chordNumbers: chords },
    });
  } catch (error) {
    dispatch({
      type: GENERATE_CHORDS_FAIL,
      payload: error,
    });
  }
};

// Fisher-Yates shuffle algorithm
function shuffle(array) {
  let m = array.length,
    t,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

// Matches chord numbers to notes
function match(chordNumbers, keyName) {
  const matchedChords = keys.find((key) => key.name === keyName);

  let chords = [];

  for (let i = 0; i < chordNumbers.length; i++) {
    for (let j = 0; j < matchedChords.notes.length; j++) {
      if (matchedChords.notes[j].number === chordNumbers[i]) {
        chords.push(matchedChords.notes[j].note);
      }
    }
  }

  return chords;
}
