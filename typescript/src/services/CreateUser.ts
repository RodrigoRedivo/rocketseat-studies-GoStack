interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string; // Array
  password: string;
  techs: Array<string |  TechObject>; // vetores
}

export default function createUser({name , email, password}: CreateUserData) {
  const user = {
    name,
    email,
    password
  }

  return user;
}