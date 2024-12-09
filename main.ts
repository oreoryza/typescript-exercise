// //string
// const nickName: string = 'John';
// //number
// const age: number = 20;
// //boolean
// const isStudent: boolean = true;
// //array
// const hobbies: string[] = ['reading', 'swimming'];
// const numbers: number[] = [1, 2, 3];
// const booleans: boolean[] = [true, false];
// const mixed: (string | number)[] = ['hello', 'tf', 'world', 2];
// //object
// const person: { name : string, age: number } = {
//     name: 'John',
//     age: 20
// };

// interface Person {
//     name: string;
//     age: number;
//     add(): number
// };

// //any
// let value: any = 'hello';

// //tuple (exclusive type data in ts)
// const tuple: [string, number] = ['hello', 1];

// //enum
// enum Direction {
//     Up = 'UP',
//     Down = 'DOWN',
//     Left = 'LEFT',
//     Right = 'RIGHT',
// };

// enum Status {
//     Active,
//     Inactive,
// }

// console.log(Status.Active);

// if (Status.Active === 0) {
//     console.log('Active');
// } else {
//     console.log('Inactive');
// }

// // function
// function add(a: number, b: number): number {
//     return a + b;
// }

// function  greet(name: string): void {
//     console.log(`Hello, ${name}!`);
// }

// function opsional(a: number, b?: number): number {
//     if (b) {
//         return a + b;
//     }
//     return a;
// }

// // type alias
// type Point = {
//     x: number;
//     y: number;
// };

// const point: Point = {
//     x: 10,
//     y: 20,
// };

// // union type
// let id: string | number;
// id = 'string';
// id = 123;

// // class
// class Animal {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     makeSound() {
//         console.log(`${this.name} makes a sound`);
//     }
// }
// class Dog extends Animal {
//     constructor(name: string) {
//         super(name);
//     }
//     makeSound() {
//         console.log(`${this.name} barks`);
//     }
// }

// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     sayHello() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// // generic
// function identity<T>(arg: T): T {
//     return arg;
// }
// const num: number = identity<number>(42);
// const str: string = identity<string>('hello');

// // type utility
// interface Person2 {
//     name: string;
//     age: number;
// }

// // Partial
// const partialPerson: Partial<Person> = {
//     name: 'John',
// };

// //readonly
// const readonlyPerson: Readonly<Person2> = {
//     name: 'John',
//     age: 20,
// };

// // readonlyPerson.name = 'Jane'; // Error: Cannot assign to 'name' because it is a read-only property.

// //pick
// type Username = Pick<Person2, 'name'>;
// const username: Username = {
//     name: 'John',
// };