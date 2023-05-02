// Union and Intersection Types

type NoobDeveloper = {
    name: string;
};

// type JuniorDeveloper = {
//     name: string;
//     expertise: string[];
//     experience: number;
// };

type JuniorDeveloper = NoobDeveloper & {
    expertise: string[];
    experience: number;
};


const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'John',
    expertise: ['JavaScript', 'TypeScript'],
    experience: 6
};

// enum Level {
//     Senior = "Senior",
//     Lead = "Lead"
// }


type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: "Senior" | "Lead";
};


const developer: NextLevelDeveloper = {
    name: 'John',
    expertise: ['JavaScript', 'TypeScript'],
    experience: 6,
    leadershipExperience: 2,
    level: "Senior"
};