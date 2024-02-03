let array = [400, 122, 132, 111, 1100, 688, 900];

array.sort(function(a, b) {
    return b - a;
});

for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] < array[j]) {

            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

console.log(array);
