const person = {
    name: 'Robby',
    age: 23,
    hobbies: ['Coding', 'Cooking']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) <- ERROR: Map can't be used on a string!
}