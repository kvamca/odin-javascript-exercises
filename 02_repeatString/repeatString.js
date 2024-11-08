const repeatString = function(word, num) {
    if(num < 0){
        return "ERROR";
    } else {
    let i = 0;
    let string = "";
    while(i<num){
        string += word;
        i++;
    }
 return string;
};
}

// Do not edit below this line
module.exports = repeatString;
