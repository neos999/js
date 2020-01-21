module.exports = {

eventObj: {}, 
/**
 * @param {String} event
 * @param {Object} subscriber
 * @param {Function} handler
 */
on: function (event, subscriber, handler) { 
    if(subscriber === undefined){
        return this;
    }else{
    if(!this.eventObj.hasOwnProperty(event)){ 
        this.eventObj[event] = []; 
    }
    this.eventObj[event].push({
        subscriber: subscriber,
        handler: handler.bind(subscriber)
    });
    return this;
}
},
/**
 * @param {String} event
 * @param {Object} subscriber
 */
off: function (event, subscriber) {
    if (this.eventObj[event] == undefined) {
        return this;
    }else if(this.eventObj.hasOwnProperty(event) && subscriber === undefined){
        this.eventObj[event].splice(0, this.eventObj[event].length);
        return this;
    }else{
        if(this.eventObj.hasOwnProperty(event)){

        for( let i = this.eventObj[event].length - 1; i >= 0; --i){

            if(this.eventObj[event][i].subscriber === subscriber){
                this.eventObj[event].splice(i, 1);
            }
        }
        return this;
        }   
    }
},
/**
 * @param {String} event
 */
emit: function (event) { 
    if(this.eventObj[event] != undefined && this.eventObj[event].length > 0){

    for( let i = 0; i < this.eventObj[event].length; i++){
        this.eventObj[event][i].handler();
    }
}
 return this;
}
};