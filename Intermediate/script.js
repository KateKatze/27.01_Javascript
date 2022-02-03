//  capitalizing letters in the word

let capitalize = (() => {
    return ('i am a web developer');
})();
console.log(`${capitalize.charAt(0).toUpperCase()} am a web developer`);

// average grade counted

function avGrade(math, physics, english) {
    sum = math + physics + english;
    average = sum / 3;
    return (`Sum: ${sum} \n Average: ${average}`)
}

console.log(avGrade(3, 4, 5));