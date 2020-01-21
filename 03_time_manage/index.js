/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
     
    dateArr = date.match(/[0-9]+/g);
    
    dateObj = new Date(dateArr[0],dateArr[1]-1,dateArr[2],dateArr[3],dateArr[4]);

    var newdate = {Obj: dateObj, get value(){
        var result;
        result = (this.Obj.getYear()+1900) + '-';
        if (this.Obj.getMonth() < 9) {
            result += '0'+(this.Obj.getMonth()+1)+ '-';
        }
        else {result += (this.Obj.getMonth()+1)+'-';};
        
        if (this.Obj.getDate() < 10) {
            result += '0'+this.Obj.getDate()+' ';
        }
        else {result += this.Obj.getDate()+' ';};
        
        if (this.Obj.getHours() < 10) {
            result += '0'+this.Obj.getHours()+':';
        }
        else {result += this.Obj.getHours()+':';};
        
        if (this.Obj.getMinutes() < 10) {
            result += '0'+this.Obj.getMinutes();
        }
        else {result += this.Obj.getMinutes();};

        return result;
        },
   
    add: function(par_value, par_name){
        if (isNaN(par_value) || par_value < 0) {
            throw new TypeError('Передано неверное значение');
        };
        if (par_name == 'months') {
            this.Obj.setMonth(this.Obj.getMonth()+par_value);
        }
        else if (par_name == 'years') {
            this.Obj.setYear(this.Obj.getYear()+par_value+1900);
        }
        else if (par_name == 'days') {    
            this.Obj.setDate(this.Obj.getDate()+par_value);
        }
        else if (par_name == 'hours') { 
            this.Obj.setHours(this.Obj.getHours()+par_value);
        }
        else if (par_name == 'minutes') { 
            this.Obj.setMinutes(this.Obj.getMinutes()+par_value);
        }
        else {
            throw new TypeError('Передан неверный параметр');
        };
        return this;
    },
    subtract: function(par_value, par_name){
        if (isNaN(par_value) || par_value < 0) {
            throw new TypeError('Передано неверное значение');
        };
        if (par_name == 'months') {
            this.Obj.setMonth(this.Obj.getMonth()-par_value);
        }
        else if (par_name == 'years') {
            this.Obj.setYear(this.Obj.getYear()-par_value+1900);
        }
        else if (par_name == 'days') {    
            this.Obj.setDate(this.Obj.getDate()-par_value);
        }
        else if (par_name == 'hours') { 
            this.Obj.setHours(this.Obj.getHours()-par_value);
        }
        else if (par_name == 'minutes') { 
            this.Obj.setMinutes(this.Obj.getMinutes()-par_value);
        }
        else {
            throw new TypeError('Передан неверный параметр');
        };
        return this;
    }


    }
     
return newdate;
};
