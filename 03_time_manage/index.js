/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    dateArr = date.match(/[0-9]+/g);
    
    dateObj = new Date(dateArr[0],dateArr[1]-1,dateArr[2],dateArr[3],dateArr[4]);

   /* console.log(date);*/

    var newdate = {value: dateObj, add: function(par_value, par_name){
        var cor_date
        switch (par_name) {
        case 'months':
            this.value.setMonth(this.value.getMonth()+par_value);
        case 'days':
            this.value.setDate(this.value.getDate()+par_value);
        case 'hours':
            this.value.setHours(this.value.getHours()+par_value);
        case 'minutes':
            this.value.setMinutes(this.value.getMinutes()+par_value);
        }
        return this;
    },
    subtract: function(par_value, par_name){
        var cor_date
        switch (par_name) {
        case 'months':
            this.value.setMonth(this.value.getMonth()-par_value);
        case 'days':
            this.value.setDate(this.value.getDate()-par_value);
        case 'hours':
            this.value.setHours(this.value.getHours()-par_value);
        case 'minutes':
            this.value.setMinutes(this.value.getMinutes()-par_value);
        }
        return this;
    }


    }
return newdate;
};
