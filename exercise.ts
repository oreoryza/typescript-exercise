//1
const userName: string = 'Alice';
const age: number = 25;
const isAdmin: boolean = true;
const colors: string[] = ['red', 'green', 'blue'];

//2
function add(a: number, b: number): number {
  return a + b;
}

//3
interface Car {
  brand: string;
  model: string;
  year: number;
}

const myCar: Car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2022,
};

//4
const userId: (string | number) = '123';

//5
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    console.log(`${this.name} makes a sound`);
  }
}

//6
class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeSound() {
    console.log(`${this.name} Woof!`);
  }
}

//7
function identity<T>(test: T): T {
  return test;
}

const result = identity<number>(42);

//8
type Point = {
  x: number;
  y: number;
};

const point: Point = {
  x: 10,
  y: 20,
};

//9
class BankAccount {
  private balance: number;
  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

//10
interface Person {
  readonly id: number;
  name: string;
}

const person: Person = {
  id: 1,
  name: 'Alice',
};

//11 partial
interface Profile {
  name?: string;
  age?: number;
}
const profileUpdate: Partial<Profile> = {
  age: 25,
};

//12
enum Role {
  Admin,
  User,
  Guest,
}

const currentRole: Role = Role.User;

//13
type Employee = {
  name: string;
  position: string;
};

type Manager = {
    department: string;
};

type EmployeeManager = Employee & Manager;

//14
const person2: { name: string; address?: { city: string } } = {
  name: 'John',
  address: {
    city: 'New York',
  },
};

//15
function calculateDiscount(price: number, discount: number): number {
  return price - (price * discount) / 100;
}