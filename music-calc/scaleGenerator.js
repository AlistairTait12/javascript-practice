class ScaleGenerator {
  preferFlats = false;

  static chromaticScaleWithSharps = [
    'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#',
    'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'
  ];

  static chromaticScaleWithFlats = [
    'a', 'bb', 'b', 'c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab',
    'a', 'bb', 'b', 'c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab'
  ];

  static get scale() {
    return this.preferFlats ? this.chromaticScaleWithFlats : this.chromaticScaleWithSharps;
  }
}

export default ScaleGenerator;
