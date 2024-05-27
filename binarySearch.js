var nums = [-1, 0, 3, 5, 9, 12];
var target = 9;

console.log(binarySearch(nums, target));

function binarySearch(nums, target) {
    var l = 0;
    var r = nums.length - 1;

    while (l <= r) {
        var m = Math.floor((l + r) / 2); // Recalculate the middle index

        if (nums[m] === target) {
            return m;
        }

        if (nums[m] > target) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }

    return -1;
}
