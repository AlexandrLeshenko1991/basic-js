module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error();

  const seasons =  ['winter', 'spring', 'summer', 'autumn']
  return date.getMonth() === 11 ? seasons[0] : seasons[Math.floor((date.getMonth()+1)/3)]
};
