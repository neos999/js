/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var result = [];
    for (var i = 0; i<tweet.length; i++) {
        if (tweet[i] == '#') {
            if (tweet.indexOf(' ',i) != -1) {
                result.push(tweet.slice((i+1),tweet.indexOf(' ',i)));        
            }
            else {
                result.push(tweet.slice((i+1),tweet.length));
            }
        }
    }
    return result;
};
