const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(sampleActivity !== undefined && !!sampleActivity && typeof sampleActivity === 'string' && !!parseInt(sampleActivity)){
    if (parseInt(sampleActivity) >= 15 && parseInt(sampleActivity) <=0) {
      return false
    }else {
      return true
    }
  }else return false
};

module.exports = function dateSample(sampleActivity) {
  let parsedVal;
  if (sampleActivity !== undefined && typeof sampleActivity === 'string') {
    parsedVal = parseFloat(sampleActivity);
  } else return false;

  if (parsedVal > 0 && parsedVal < MODERN_ACTIVITY) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / parsedVal) * HALF_LIFE_PERIOD / 0.693);
  }
  return false;
};