export type UserRole =
  | "OWNER"
  | "MANAGER"
  | "ACCOUNTANT"
  | "OPERATOR";

export interface User {
  id: number;
  name: string;
  email: string;
  mobile: string;
  role: UserRole;
  theatre: string;
  status: "ACTIVE" | "INACTIVE";
}

export interface Theatre {
  id: number;
  name: string;
  city: string;
  screens: number;
  status: "ACTIVE" | "INACTIVE";
}

export interface Show {
  id: number;
  movie: string;
  screen: string;
  showTime: string;
  soldTickets: number;
  capacity: number;
  collection: number;
}

export interface CollectionSummary {
  gross: number;
  tickets: number;
  food: number;
  parking: number;
  expenses: number;
  net: number;
}