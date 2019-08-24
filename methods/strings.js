/**
 * @param {string} s1
 * @param {string} s2
 * @param {number} match_percentage
 */
exports.match = (s1, s2, match_percentage) => {
    s1 = s1.replace(/ /gi, '');
    s2 = s2.replace(/ /gi, '');
    if ( s1 === s2 || s1.includes(s2) || s2.includes(s1) ) return true;

    let longStrLen = s1.length + 1;
    let shortStrLen = s2.length + 1;
    let cost = [];
    let newcost = [];
    for (let i = 0; i < longStrLen; i++) cost[i] = i;
    for (let j = 1; j < shortStrLen; j++) {
        newcost[0] = j;
        for (let i = 1; i < longStrLen; i++) {
            let match = 0;
            if (s1.charAt(i - 1) != s2.charAt(j - 1)) match = 1;
            let replace = cost[i - 1] + match;
            let insert = cost[i] + 1;
            let del = newcost[i - 1] + 1;
            newcost[i] = Math.min(Math.min(insert, del), replace);
        }
        let temp = cost;
        cost = newcost;
        newcost = temp;
    }
    return ( (longStrLen - cost[longStrLen - 1]) / longStrLen * 100 ) >= match_percentage;
}
