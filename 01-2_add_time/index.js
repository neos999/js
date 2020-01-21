/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
minutes = minutes + interval;
hours = hours + Math.floor(minutes/60);
minutes = minutes - Math.floor(minutes/60)*60;
hours = hours - Math.floor(hours/24)*24;
var myString ='';
if (hours<10) {
    myString='0';
}
myString = myString + String(hours)+':';
if (minutes<10) {
    myString=myString+'0';
}
myString = myString + String(minutes);
return myString;

};
