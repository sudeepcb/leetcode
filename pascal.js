var input = 25;
getPascal(input);
function getPascal(input){
    var array = [];
    array[0] = [1];
    array[1] = [1,1];
    for(var i = 2; i < input; i++){
        var tracker = 0;
        array[i] = [];
        while(tracker < array[i-1].length - 1){
            array[i][0] = 1;
            array[i][tracker+1] = array[i-1][tracker] + array[i-1][tracker+1];
            tracker++;
        }
        array[i][array[i].length] = 1;
    }
    console.log(array);
}