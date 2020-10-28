/* const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Robby',
    age: 23,
    hobbies: ['Coding', 'Cooking'],
    role: [2, 'programmer'],
}; */

/* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2; */

enum Role {ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Robby',
    age: 23,
    hobbies: ['drawing', 'programming'],
    role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'super programmer'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) <- ERROR: Map can't be used on a string!
}

if (person.role === Role.ADMIN) {
    console.log('Admin!');
}