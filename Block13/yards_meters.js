function convertToMeters(yards){
    return yards * 0.9144;
}
let inputYards = prompt('enter a number, we will convert that number from yards to meters');
console.log("Input Yards: ", inputYards)
let convertedMeters = convertToMeters(inputYards);
console.log("Converted Meters: ", convertedMeters)
function createMessage(yards, meters){
    let message = '';
    const numYards = yards * 1;

    if(numYards === 1760){
        message = 'Thats as long as a mile';
    }else if(numYards === 100){
        message = 'Thats as long as a football field';
    }else if(numYards === 26){
        message = 'Thats as long as a tennis court';
    }else if(numYards === 10){
        message = 'Thats as long as a first down';
    }
    return `${yards} yards is ${ meters} meters. ${message}`;
}