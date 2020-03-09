// Code your solutions in this file
function writeCards(people, message){
    let result = [];
    for( let i = 0; i < people.length; i++ ){
        result.push(`Thank you, ${people[i]}, for the wonderful ${message} gift!`);        
    }
    return result;
}

//writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(num) {
    while(num > 0){
        console.log(num);
        num -= 1;
    }
    console.log(num);
}