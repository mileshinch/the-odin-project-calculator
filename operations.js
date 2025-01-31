const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
	let total=0;
    for (let i=0; i<arr.length;i++) {
        total = total + arr[i]
    }
    return total
};

const multiply = function(arr) {
  let total=1;
    for (let i=0; i<arr.length;i++) {
        total = total * arr[i]
    }
    return total
};