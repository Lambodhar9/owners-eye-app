export interface Screen {
  id: number;
  name: string;
  capacity: number;
  status: "ACTIVE" | "INACTIVE";
  showsToday: number;
  ticketsSoldToday: number;
  collectionToday: number;
}

export interface Theatre {
  id: number;
  name: string;
  location: string;
  address: string;
  mobile: string;
  email: string;
  status: "ACTIVE" | "INACTIVE";
  screens: Screen[];
}