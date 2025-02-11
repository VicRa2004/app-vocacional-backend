export type UserRolType = "user" | "admin";

export type UserType = {
  id_user: number;
  fullname: string;
  password: string;
  username: string;
  email: string;
  rol: UserRolType;
  email_confirm: boolean;
  createdAt?: Date;
  updatedAt?: Date;
};

export type UserCreate = Omit<
  UserType,
  "id_user" | "createdAt" | "updatedAt" | "email_confirm" | "rol"
>;

export type UserUpdate = Omit<UserType, "id_user">;
