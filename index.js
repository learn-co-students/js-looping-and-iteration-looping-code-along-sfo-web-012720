function writeCards(name) {
    let written = [];
    let i = 0;
    while (i < name.length) {
        written.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
        i++;
    }
    return written;
}   

function countDown(num) {
    while (num > 0) {
        console.log(num)
        num -= 1;
    }
    console.log(num)
}

