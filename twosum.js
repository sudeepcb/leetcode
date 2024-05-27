var nums = [2,7,11,15];
var target = 17;

console.log(twoSum(nums, target));
function twoSum(nums, target){
    var numsMap = new Map();
    var indicesOfSum = [];
    nums.forEach((num, i) => {
        numsMap.set(num, i);
    });

    console.log(numsMap);

    for (let index = 0; index < nums.length; index++) {
        var currentSum = target - nums[index];
        var isinMap = numsMap.get(currentSum);
        console.log(currentSum);
        if(isinMap != null && isinMap != index){
            indicesOfSum[0] = index;
            indicesOfSum[1] = isinMap;
            return indicesOfSum;
        }
    }
    return [];
}

