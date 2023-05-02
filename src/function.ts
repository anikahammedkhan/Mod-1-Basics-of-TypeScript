// normal function declaration

function add(x: number, y: number): number {
    return x + y;
}

add(1, 2);


// Arrow function

const add2 = (x: number, y: number): number => {
    return x + y;
}

add2(1, 2);


// call back function

const arr = [1, 2, 3];

const newArr = arr.map((elem: number) => elem * elem);


// Kono function jodi object er moddhe thake tahole sei function ke method bole.

const person: {
    name: string,
    age: number,
    salary: number,
    addSalary: (amount: number) => number
} = {
    name: 'Sakib',
    age: 35,
    salary: 45000,
    addSalary: function (amount: number): number {
        return this.salary + amount;
    }
}

// spread operator

const friends = ['Sakib', 'Rakib', 'Nakib', 'Dakib'];
const newFriends = [...friends, 'Bakib', 'Lakib'];

// rest operator

const greetFriends = (friend1: string, friend2: string, ...restFriends: string[]) => {
    console.log(`Hello ${friend1}`);
    console.log(`Hello ${friend2}`);
    console.log(`Hello ${restFriends}`);
}

greetFriends('Sakib', 'Rakib', 'Nakib', 'Dakib', 'Bakib', 'Lakib');