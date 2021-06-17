// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let reveresd = '';

    for (let character of str) {

        reveresd = character + reveresd;
    }
    return reveresd
}

module.exports = reverse;


// What is coming In?
// the string 'str' is being passed in
// Once in the function we need to reverse the string

//create a empty str for the reversed variable 

// iterate over the str string to  in return send the reversed elements to the empty reveresed string

// so the empty revered string  equals the 'chacter of the str string' + the reveresed str

// reveresed = ('apple') + ('')
// revered = ('appl') + ('e')
// reversed = ('app') + ('el')



// What is coming out?
//reversed version of the 'stg' string