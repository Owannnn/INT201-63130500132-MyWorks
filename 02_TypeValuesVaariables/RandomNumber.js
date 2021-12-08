//Random number function
function mathRandom(){
    return Math.floor(Math.random()* 100) +1;
}

//Create array of number
//Assigned number into array
let mathNumber = [];
for (i=0; i<3; i++) {
    mathNumber[i] = mathRandom();
}

//Find sum function
//return the sum of 3 random numbers
function findSum() {
    let sum = 0;
    for(i = 0; i<mathNumber.length; i++){
        sum += mathNumber[i]
    }
    return sum;
}

//Find Minimum function
//return the min of 3 random numbers
function findMinimum() {
    let minimum = mathNumber[0];
    for(i = 0; i<mathNumber.length; i++){
        minimum = Math.min(minimum, mathNumber[i])
    }
    return minimum;
}

//Find Maximum function
//return the max of 3 random numbers
function findMaximum() {
    let maximum = mathNumber[0];
    for(i = 0; i<mathNumber.length; i++) {
    maximum = Math.max(maximum, mathNumber[i])
    }
    return maximum;
}


//Menu function
function menu(choice) {
    switch(choice){
        case 0:// sum
        console.log(findSum());
            break;
        case 1:// min
        console.log(findMinimum());
            break;
        case 2:// max
        console.log(findMaximum());
            break;
    }
}

//Test menu
console.log(`MathSet = ${mathNumber}`);
menu(0);
menu(1);
menu(2);