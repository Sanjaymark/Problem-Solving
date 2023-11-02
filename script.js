// Factorial

let a = 3;

let fact = 1;

for (i=1; i<=a; i++)
{

    fact = fact * +i;
};

console.log(fact);


// Prime Number

function isPrime(n)
{
    if(n==2)
    {
        return "it is a prime number"
    }
    else
    {
        for (let i=2; i<n; i++)
        {
            if(n%i==0)
            {
            return "not a prime number"
            }
            else
            {
                return "it is a prime number"
            }
        }
    }
    
};

var prime = isPrime(7);

console.log(prime);


// Pyramid Pattern

function pyramid(rows)
{
    for (let i=1; i<=rows; i++)
    {
        let space = ' '.repeat(rows - i);
        let pattern = '*'.repeat(2*i - 1);
        console.log(space + pattern)
    }
}

pyramid(3);


// Diamond Pattern

function Diamond(rows)
{
    for (let i=rows; i>=1; i--)
    {
        let space = ' '.repeat(rows - i);
        let pattern = '*'.repeat(2*i - 1);
        console.log(space + pattern)
    }
}

Diamond(4);


// Add two numbers without using +

let num1 = 5;
let num2 = 6;

console.log(-(-num1-num2));


// Fibonacci series

let n1 = 0, n2 = 1, nextterm;

function fibonacci(noOfTerms)
{
    for (let i=1;i<=noOfTerms; i++)
    {
        console.log(n1);
        nextterm = n1 + n2;
        n1 = n2;
        n2 = nextterm;
    }
}

fibonacci(15);


// Checking Frequency of numbers in a array

const checkFrequency = (array) =>
{
    let freq = {};

    array.forEach((e)=>
    {
        freq[e] = (freq[e] + 1) || 1;
    })

    return freq;
}


let result = checkFrequency([1,2,2,3,3,3,4,4,4,4]);

console.log(result)

// using reduce

function frequency(array)
{
   return array.reduce((frequency, num)=>
    {
        frequency[num] = (frequency[num] + 1) || 1;
        return frequency
    }, {})

    
}

let f = frequency([1,1,1,2,2,2,2,3,3,3,4,4,4])

console.log(f)

