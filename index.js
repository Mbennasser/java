//revers string//
function reverseString(str) {
    var word = ""
    for (var i = str.length - 1; i >= 0; i--) {
        word += str[i]

    }
    return word
}
// console.log(reverseString("helloo"));

//count//
function CountCharacters(str) {
    var count = 0
    for (var i = 0; i < str.length; i++) {
        count++
    }
    return count
    
    
}
// console.log(CountCharacters("hello world"));

// capitalize words//
function capitalizeWords(sentence) {
    var word = sentence.split(" ")
    console.log(word);
    
    var array = []
    for (var i = 0; i < word.length; i++) {
        array.push(word[i][0].toUpperCase() + word[i].substring(1).toLowerCase())

    }
    return array.join(" ")

}
// console.log(capitalizeWords("hello word"))

//Find Maximum and Minimum//
function findMaxMin(arr) {
    var max = arr[0]
    var min = arr[0]
    var i = 1
    while (i < arr.length) {
        if (arr[i] > max) {
            max = arr[i];

        }
        if (arr[i] < min) {
            min = arr[i]

        }
        i++
    }
    return { max, min };
}
// console.log(findMaxMin([5, 3, 7, -5, -1]));

// Sum of Array//
function sumArray(arr) {
    var sum = 0
    var i = 0
    while (i < arr.lenght) {
        sum += arr[i];
        i++
    }
    return sum;
}
// console.log(sumArray([3, 5, 1, 8, 2]))

// filtre//
function filterPositive(arr) {
    var i = 0
    var result = [];
    do {
        if (arr[i] > 0) {
            result.push(arr[i]);

        }
        i++;

    } while (i < arr.length);
    return result;
}
// console.log(filterPositive([3, -5, 1, 0, -2, 8]));

//factorial//
function factorial(n) {
    var r = 1
    var i = n
    do {
        r *= i
        i--

    } while (i > 0);
    return r
    
}
// console.log(factorial(5));

// isprime//
function isPrime(num) {
    if (num <= 1) return false;
    let i = 2;

    while (i * i <= num) {
        if (num % i === 0) return false;
        i++
    }

    return true;
}

// console.log(isPrime(7));
// console.log(isPrime(10));

//fibonacci//
function fibonacciSequence(n) {
    var r = [0, 1]
    for (var i = 2; i < n; i++) {
        r[i] = r[i - 1] + r[i - 2];
    }
    return r
}
var n = 10
// console.log(fibonacciSequence(n));





