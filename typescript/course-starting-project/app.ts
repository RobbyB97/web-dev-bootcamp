const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Robby',
    age: 23,
    hobbies: ['Coding', 'Cooking'],
    role: [2, 'programmer'],
};

// person.role.push('admin');
// person.role[1] = 10;

person.role = [0, 'super programmer'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) <- ERROR: Map can't be used on a string!
}