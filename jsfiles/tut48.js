console.log('this is tutorial 48')
// Regular Expressions:
    // Basic functions 
    // Metacharacter Symbols

// const regex = /^h/i;

// Character Sets - We use []
let regex =/s[a-z]ed/; // can be any character from a to z
regex = /s[aty]ed/; //can be an a, t or y
regex= /s[^aty]e[abbd]/// cannot be any of a, t or y + can be a u or y
regex=/s[a-zA-Z]e[dy0-9][0-9]/;// we can have as many character sets as we want

// quantifiers
regex =/sy{2}ed/;// r can occur exactly 2 times
regex=/sy[0,2]ed///r can occur exactly 0 to 2(0 or 1 0r 2 times)

// groupings - we use paranthesis for groupings
regex= /(sye){2}/

//  const str= "sie bhai"
// str= "syyed bhai"
str= 'syesyebhai'

let result = regex.exec(str);
console.log("The result from exec is ", result);


if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);
}

 

