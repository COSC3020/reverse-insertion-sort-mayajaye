//Maya Conway
//code.js
//Reverse Insertion Sort
//2-17-25

function insertionSortReverse(array) {
    for (var i = array.length-2; i >= 0; i--) {     //start from the end of the array
        var val = array[i];                         //normal insertion stuff
        var j;
        for (j = i; j < array.length-1 && array[j+1] < val; j++) {
            array[j] = array[j+1];                  //iterate starting from right and
        }                                           //swap to the right
        array[j] = val;
    }
    return array;
}
