// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    commandWord = command.split (' ');
    switch (commandWord[0]){
        case 'ADD': return addPhone (commandWord[1],commandWord[2], phoneBook);
        case 'REMOVE_PHONE': return removePhone (commandWord[1], phoneBook);
        case 'SHOW': return show (phoneBook);
    }
};

function removePhone (str, Book){
    var keys = Object.keys(Book); 
    for (var i = 0; i < keys.length; i++) {
         if (Book[keys[i]].indexOf(str) !== -1) {
             Book[keys[i]].splice(Book[keys[i]].indexOf(str),1);
             return true;
         }
    }     
    return false;                
 }
 
 function addPhone (name, phone, Book){
     var phones = phone.split(',');
 
     if (Book.hasOwnProperty(name)==false) {
         Book[name]=[];
         }
     for (var i = 0; i < phones.length; i++) {
         Book[name].push(phones[i]);
         }
    return true;
 };
 
 function show (Book){
     var keys = Object.keys(Book);
    keys.sort();
     var result = [];
     var stringphones = '';
     for (var i = 0; i < keys.length; i++) {
         stringphones = Book[keys[i]].join(', ');
         if (stringphones !== '') {
             result.push(keys[i]+': '+stringphones);
         }
     }
     return (result);
 };
