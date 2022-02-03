// personal info

function personInfo(job_titel, location, partner_name, number_childrens) {

    return ("You will be a " + job_titel + " in " + location + " and married to " + partner_name + " with " + number_childrens)
}

console.log(personInfo("Doctor", "Russia", "Thomas", "fur babys."));


// age calculator

const ageCalculator = (currentYear, birthYear) => {
    return currentYear - birthYear;
};

var myAge = ageCalculator(2022, 1993);

console.log(myAge);

// age calculator with new Date ()

const ageCalculator2 = (birthYear, currentYear) => {
    return currentYear - birthYear;
};

const currentDate = new Date();

console.log(ageCalculator2(1993, currentDate.getFullYear()));


// rad count

function radiantConv(deg) {

    rad = deg * (Math.PI / 180)
    return rad

}

radiantConv(124);
console.log(rad);

// box square

function box(width, height, depth) {
    area = width * height;
    volume = width * height * depth;
    return ("The area of the box is: " + area + "\n" + " The volume of the box is: " + volume)
}

console.log(box(2, 7, 5));