var obj = {
    isEmpty: function (array) {
        return array.length==0;
    }
    ,
    max: function (array) {
        if (array.length==0){
            return null;
        }
        var max = array[0];
        for (let i = 0; i < array.length; i++) {
            if(array[i]>max){
                max=array[i];
            }
        }
        return max;
    }
    ,
    min: function (array) {
        if (array.length==0){
            return null;
        }
        var min = array[0];
        for (let i = 0; i < array.length; i++) {
            if(array[i]<min){
                min=array[i];
            }
        }
        return min;
    }
    ,
    average: function (array) {
        if (array.length==0){
            return null;
        }
        var soma=0;
        var media;
        for (let i = 0; i < array.length; i++) {
            soma+=array[i];
        }
        media=soma/array.length;
        return media;
    }
    ,
    indexOf: function (array,value) {
        var ind=-1;
        for (let i = 0; i < array.length; i++) {
            if (array[i]==value){
                ind=i;
            }
        }
        return ind;
    }
    ,
    subArray: function (array,starindex,endindex) {
        if (array.length==0 || starindex<0 || endindex+1>array.length){
            return null;
        }
        var sub=[];
        for (let i = starindex; i <= endindex; i++) {
            sub.push(array[i]);
        }
        return sub;
    }
    ,
    isSameLength: function (array,array2) {
        return array.length==array2.length;
    }
    ,
    reverse: function (array) {
        if (array.length==0){
            return null;
        }
        var sub=[];
        for (let i = array.length-1; i >= 0; i--) {
            sub.push(array[i]);
        }
        return sub;
    },
    swap: function (array,index1,index2) {
        if (array.length==0 || index1<0 || index2+1>array.length){
            return null;
        }
        var temp=array[index1];
        array[index1]=array[index2];
        array[index2]=temp;
        return array;
    }
    ,
    contains: function (array,value) {
        return this.indexOf(array,value)!=-1;
    }
    ,
    concatenate: function (array,array2) {
        var sub=[];
        for (let i = 0; i < array.length; i++) {
            sub.push(array[i]);
        }
        for (let i = 0; i < array2.length; i++) {
            sub.push(array2[i]);
        }
        return sub;
    }
};
module.exports = obj;
