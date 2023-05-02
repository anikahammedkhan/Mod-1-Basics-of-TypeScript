const searchName = (value: string) => {
    if (value === null) {
        console.log('Nothing to search');
    } else {
        console.log('Searching ....');
    }
};

// searchName('hello');

const getMyCarSpeed = (speed: unknown) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My car speed is ${convertedSpeed} m/s`);
    } if (typeof speed === 'string') {
        const value = speed.split(' ');
        const convertedSpeed = (parseInt(value[0]) * 1000) / 3600;
        console.log(`My car speed is ${convertedSpeed} m/s`);
    } else {
        console.log('Invalid speed');
    }
};

getMyCarSpeed(100);
getMyCarSpeed('100 km/h');
getMyCarSpeed(true);

function throwError(message: string): never {
    throw new Error(message);
}

throwError('Something went wrong');