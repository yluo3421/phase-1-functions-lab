// Code your solution in this file!
let headquarters = 42;
function distanceFromHqInBlocks(pickupLocation) {
    let distanceInBlock = Math.abs(pickupLocation - headquarters);
    return distanceInBlock;
}

function distanceFromHqInFeet(pickupLocation) {
    let distanceInFeet = distanceFromHqInBlocks(pickupLocation) * 264;
    return distanceInFeet;
}

function distanceTravelledInFeet(pickupLocation, destinationLocation) {
    let distanceTravelFeet = Math.abs(pickupLocation - destinationLocation) * 264;
    return distanceTravelFeet;
}

function calculatesFarePrice(start, destination) {
    let distance = Math.abs(start - destination) * 264;
    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return 0.02 * (distance - 400);
    }
    else if (distance > 2000 && distance <= 2500) {
        return 25;
    }
    else if (distance > 2500) {
        return 'cannot travel that far';
    }
}