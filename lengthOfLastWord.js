var lengthOfLastWord = function(s) {
    var i = s.length - 1;

    length = 0;

    while(s[i] == ' '){
        i -= 1;
    }
    while(i >= 0 && s[i] != ' '){
        length += 1;
        i -= 1;
    }
    return length
};


console.log(lengthOfLastWord("a"));