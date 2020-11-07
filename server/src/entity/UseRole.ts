import { registerEnumType } from "type-graphql";

export enum UserRole {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
  ADMIN = "ADMIN",
}

registerEnumType(UserRole, { name: "UserRole" });
