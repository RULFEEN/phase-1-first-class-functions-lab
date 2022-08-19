const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
    const firstTwoDrivers = drivers.slice(0,2);
    return firstTwoDrivers;
}

returnFirstTwoDrivers(drivers);
console.log(returnFirstTwoDrivers(drivers));

function returnLastTwoDrivers(drivers){
    const lastTwoDrivers = drivers.slice(2);
    return lastTwoDrivers;
}

returnLastTwoDrivers(drivers);
console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0]);
console.log(selectingDrivers[1]);
console.log(selectingDrivers[0](drivers));
console.log(selectingDrivers[1](drivers));

const createFareMultiplier = () => (fareMultiplier = (num) => num * num);
console.log(createFareMultiplier(2));

const fareDoubler = num => num + num;

const fareTripler = num => num * 3;

const selectDifferentDrivers = (array, fn) => fn(array);
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));