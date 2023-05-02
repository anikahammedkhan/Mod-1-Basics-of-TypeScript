type CrushType = {
    name: string,
    age?: number,
    proffesion: string,
    address: string,
}

const crush1: CrushType = {
    name: 'Ali',
    age: 20,
    proffesion: 'Developer',
    address: 'Lahore',
};

const crush2: CrushType = {
    name: 'Ali Raza',
    proffesion: 'Developer',
    address: 'Lahore',
};

type OperationType = (x: number, y: number) => number;
const calculate = (
    number1: number,
    number2: number,
    operation: OperationType
) => {
    return operation(number1, number2);
}

calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);