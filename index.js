// Code your solutions in this file

function writeCards(names, event_name) {
    let arr = []
    for (let i = 0; i < names.length; i++) {
        arr.push(`Thank you, ${names[i]}, for the wonderful ${event_name} gift!`);
    };
    return arr;
};

function countDown(number) {
    while(number >= 0) {
        console.log(number);
        number--;
    };
};