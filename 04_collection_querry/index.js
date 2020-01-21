/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var newcoll = []; 
    for (var i=0;i<collection.length;i++){
        var keys = Object.keys(collection[i]);
        newcoll[i] = {};
        for (var j=0; j<keys.length; j++) {
            newcoll[i][keys[j]] = collection[i][keys[j]];
     }
 //       newcoll[i]=collection[i].slice();
    }
    if (arguments.length == 1) {
        return newcoll;
    };
    



    for (var index = 1; index<arguments.length; index++){
        var el = arguments[index];
        if (el.hasOwnProperty('property')){
 //           console.log(arguments[index].values);
            
           for (var i=0; i<newcoll.length; i++){
 //               console.log(newcoll[i][arguments[index].property]);
                if (el.values.indexOf(newcoll[i][el.property]) === -1) {
//                    console.log(newcoll[i]); 
                    newcoll.splice(i,1);
                    i--;
 //                   console.log('---'); 
                };
            };
        }
    }    

        

    for (var index = 1; index<arguments.length; index++){
        var el = arguments[index];
        if (!el.hasOwnProperty('values')){
            for (var i=0; i<newcoll.length; i++){

                var keys = Object.keys(newcoll[i]);
                for (var j=0; j<keys.length; j++){
                    if (el.indexOf(keys[j]) === -1) {
                        delete newcoll[i][keys[j]];

                    };
                }
            
            };
        }

    };





   return newcoll;
}

/**
 * @params {String[]}
 */
function select() {
    var arr = [].slice.call(arguments);
    return arr;
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    
    return {property, values};
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};


