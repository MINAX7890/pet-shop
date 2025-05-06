
export type Pet = {
  id: string;
  name: string;
  type: "dog" | "cat" | "other";
  breed: string;
  age: number;
  gender: "male" | "female";
  description: string;
  image: string;
  status: "available" | "pending" | "adopted";
};

export type AdoptionForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  petId: string;
  reason: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
