// Code your solution in this file!
const returnFirstTwoDrivers = function returnFirstTwoDrivers(arr) {
    return [arr[0], arr[1]]
}

const returnLastTwoDrivers = function returnLastTwoDrivers(arr) {
    return arr.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int
    }
}

function fareDoubler(fare) {
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arr, drivers) {
    return drivers(arr)
}