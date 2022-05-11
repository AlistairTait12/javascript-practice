import IntervalConstants from "./intervalConstants.js";
import ScaleGenerator from "./scaleGenerator.js";

class Interval {
  root;
  quality;

  constructor(root, quality) {
    this.root = root.toLowerCase();
    this.quality = quality;
    this.semitones = IntervalConstants.semitones[quality];
  }

  get interval() {
    return this.calculateInterval().toUpperCase();
  }
  
  get notes() {
    return ScaleGenerator.scale;
  }

  calculateInterval() {
    let rootIndex = this.notes.indexOf(this.root);

    return this.notes[rootIndex + this.semitones];
  }
}

export default Interval;
