// Remove Element
var removeElement = function(nums, val) {
    var j = nums.length - 1;
    var i = 0;

    
    while(i < j + 1){
        while(nums[j] == val){
            nums.pop(nums[j]);
            j--;
        }

        if(nums[i] == val){
            nums[i] = nums[j];
            nums.pop(nums[j]);
            i++;
            j--;
        }

        if(nums[i] != val){
            i++;
        }
    }

    return nums.length;
};

removeElement([2,2], 2);