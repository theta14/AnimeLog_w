/**
 * @param {number} n 
 */
function set2Letter(n) {
    return n >= 10 ? n : '0' + n;
}
  
/**
 * @param {string} s 
 */
exports.getFormattedDate = (s) => {
    if ( s == null ) return null;
    let d = new Date(s);
    return `${d.getFullYear()}-${set2Letter(d.getMonth()*1+1)}-${set2Letter(d.getDate())}`;
}
