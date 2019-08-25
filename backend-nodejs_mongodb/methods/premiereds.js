/**
 * @param {number} month 
 */
exports.getPremieredQuarterFromMonth = (month) => {
  for (let i=1; i<=9; i+=3) if ( i <= month && month <= (i+2) ) return (i + 2) / 3;
  return 4;
}

/**
 * @param {string} season
 */
exports.getPremieredQuarterFromSeason = (season) => {
  const seasons = [ 'Winter', 'Spring', 'Summer', 'Fall' ];
  for (let i=0; i<seasons.length; i++) if ( season == seasons[i] ) return i + 1;
  return null;
}
