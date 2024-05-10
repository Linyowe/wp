function arrayMin(arr) {
    if (arr.length === 0) {
        return;
    }
    var min = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

var numbers = [5, 3, 9, 1, 7];
console.log("最小的數字是:", arrayMin(numbers));
