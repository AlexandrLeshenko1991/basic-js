const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let val;
  if (sampleActivity !== undefined && !!sampleActivity && typeof sampleActivity === 'string') {
    val = parseFloat(sampleActivity);
  } else return false;

  if (val > 0 && val < MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / val) * HALF_LIFE_PERIOD / 0.693);
  }
  return false;
};