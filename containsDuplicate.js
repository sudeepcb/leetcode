var nums = [1,2,3,1];

console.log(containsDuplicate(nums));
function containsDuplicate(nums){
    var hashMap = new Set();
    var hasDuplicate = false;
    for(var i = 0; i < nums.length; i++){
        if(hashMap.has(nums[i])){
            return true;
        }
        hashMap.add(nums[i]);
    }
    return false;
}