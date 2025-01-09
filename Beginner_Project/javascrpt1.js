const people = [
    {name: 'Alice', age: 20},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 40}
];

const names = people.filter(person => person.age >= 30).map(person => person.name);
console.log(names);
