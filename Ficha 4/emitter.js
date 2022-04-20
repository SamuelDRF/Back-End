class emitter {
    constructor(){
        this.events={};
    }
}



emitter.prototype.on = function(type, listener){
    if (this.events[type] === undefined){
       this.events[type]=[]; 
    }
    this.events[type].push(listener);
};