import ChordConstants from "./chordConstants.js";
import Interval from "./interval.js";

class ChordBuilder {
  static build(root, chordQuality = 'M') {
    let intervalQualities = ChordConstants.chordCompositions[chordQuality];
    let notes = [];

    intervalQualities.forEach(element => {
      notes.push(new Interval(root, element).interval);
    });

    return notes;
  }
}

export default ChordBuilder;
