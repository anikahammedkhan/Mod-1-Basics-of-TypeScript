// ternary operator 

const age: number = 20;

// if (age >= 18) {
//     console.log('You are eligible to vote');
// } else {
//     console.log('You are not eligible to vote');
// }

const isAdult = age >= 18 ? 'You are eligible to vote' : 'You are not eligible to vote';

console.log(isAdult);

// Nullish coalescing operator

const isAauthenticated = null;
const userName = isAauthenticated ?? 'Guest';

console.log(userName);

type Manus = {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
        home?: string;
    }
}

const person3: Manus = {
    name: 'John',
    age: 20,
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

const home = person3?.address?.home ?? 'No home';

console.log(home);
