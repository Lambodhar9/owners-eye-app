export const theatresApi = {
  getTheatres: async () => {
    return [
      {
        id: 1,
        name: "Sri Lakshmi Cinemas",
        city: "Hyderabad",
        screens: 3,
        status: "ACTIVE"
      },
      {
        id: 2,
        name: "Venkateswara Cinemas",
        city: "Vijayawada",
        screens: 4,
        status: "ACTIVE"
      },
      {
        id: 3,
        name: "Rama Talkies",
        city: "Visakhapatnam",
        screens: 5,
        status: "ACTIVE"
      }
    ];
  }
};