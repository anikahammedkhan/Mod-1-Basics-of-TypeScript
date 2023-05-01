const users = {
    name: 'Jack', age: 21, isMarried: true
}

const usersDup: {
    name: string,
    age: number,
    isMarried: boolean
} = {
    name: 'Jack', age: 21, isMarried: true
}

// optional type er jonno ? use korte hobe

const usersDup2: {
    name: string,
    age: number,
    isMarried?: boolean
} = {
    name: 'Jack', age: 21
}

// specify type of function 
const usersDup3: {
    name: "Jack",
    age: number,
    isMarried?: boolean
} = {
    name: 'Jack', age: 21
}

// read only property

const usersDup4: {
    readonly name: "Jack",
    age: number,
    isMarried?: boolean
} = {
    name: 'Jack', age: 21
}



