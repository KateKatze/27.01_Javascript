//  capitalizing letters in the word

let capitalize = (() => {
    return ('i am a web developer');
})();
console.log(`${capitalize.charAt(0).toUpperCase()} am a web developer`);

// average grade counted

function avGrade(math, physics, english) {
    sum = math + physics + english;
    average = sum / 3;
    return (`Sum: ${sum}\nAverage: ${average}`)
}

console.log(avGrade(3, 4, 5));

// time converter 2 diff solutions

function timeConv(min) {
    hrs = Math.floor(min / 60);
    rest = min % 60;
    return (min + " minutes" + " is " + hrs + " hour(s) and " + rest + " minutes.");
}

console.log(timeConv(13456));

// function timeConv (min) {
//     hrs = parseInt(min /60);
//     rest=min%60;
//     return (`${min} minutes is ${hrs} hour(s) and ${rest} minutes.`);
// }

// console.log(timeConv(186));