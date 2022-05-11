// Create User interface. The types are:
//  firstName: string
//  lastName: string
//  age: number
//  isAdmin: boolean

interface User {
  id?: number;
	firstName: string;
  lastName: string;
  age: number;
  isAdmin?: boolean;
  }

  
  

// Convert the function to TypeScript, making sure to use the
//  User interface as the return type
function createUser (use:  User)  {
  console.log(use);
  return use; 

}

const newUser: User = {firstName:'Ola', lastName:'Nordmann', age: 18};
const newAdmin : User = {firstName:'Kari', lastName:'Nordmann', age: 36, isAdmin: true};



