import { User } from "../user/User";

export type Family = {
  country: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  member?: Array<User>;
  updatedAt: Date;
};
