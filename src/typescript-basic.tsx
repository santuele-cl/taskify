// let name: string;
// let age: number;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];
// let anyy: string;
// anyy = "dkfaj";

type Person = {
  name: string;
  civilStatus: "SINGLE" | "MARRIED" | "WIDOWED" | "SEPARATED";
  height?: number;
  weight?: number;
};

// hobbies = ["adf", "asdf"];
// hobbies = ["adf", "asd"];
// console.log(hobbies);

// role = [5, 5];
// const clyde: Person = {
//   name: "clyde",
//   civilStatus: "SINGLE",
//   height: 150,
//   weight: 20,
// };

// const people: Person[] = [
//   { name: "lenon", civilStatus: "SINGLE" },
//   { name: "san", civilStatus: "sdsd" },
// ];

// console.log(people, clyde);

function greetPeople(name: string): string {
  // console.log(`Hi ${name}`);
  return name + 5;
}

console.log(greetPeople("lenon"));

const sampleNever = (name: string): void => {
  console.log(name);
  // return name;
};

console.log(sampleNever("san"));
