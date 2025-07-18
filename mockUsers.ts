import { UserType } from "./types/userTypes";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  userType: UserType;
}

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Usuário Comum",
    email: "comum@example.com",
    password: "123456",
    userType: UserType.Common,
  },
  {
    id: "2",
    name: "Paciente Teste",
    email: "paciente@example.com",
    password: "123456",
    userType: UserType.Patient,
  },
  {
    id: "3",
    name: "Clínico Teste",
    email: "clinico@example.com",
    password: "123456",
    userType: UserType.Clinician,
  },
  {
    id: "4",
    name: "Administrador Teste",
    email: "admin@example.com",
    password: "123456",
    userType: UserType.Administrator,
  },
];
