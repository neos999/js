/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
     if (hashtags == []) {
         return '';
     }

     var result =[];
     for (var i=0; i<hashtags.length; i++) {
        hashtags[i]=hashtags[i].toLowerCase();
        if (result.indexOf(hashtags[i])==-1) {
            result.push (hashtags[i]);
        }
     }
     return result.join(', ');
};
