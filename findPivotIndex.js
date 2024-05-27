var pivotIndex = function(nums) {
    var leftSum = 0;
    var rightSum = nums[nums.length - 1];
    var i = 0;
    var j = nums.length - 1;
    while(i < j){
        if(leftSum > rightSum){
            rightSum += nums[j];
            j--;
        }

        if(rightSum > leftSum){
            leftSum += nums[i];
            i++;
        }
    }
    if(leftSum != rightSum){
        return -1;
    }
    return i;
};

var nums = [2,1,-1];
console.log(pivotIndex(nums));