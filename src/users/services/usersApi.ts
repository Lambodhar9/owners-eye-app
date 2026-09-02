export const usersApi = {
  getUsers: async () => {
    return [
      {
        id: 1,
        name: "Kumar",
        email: "owner@cinema.com",
        mobile: "9876543210",
        role: "OWNER",
        theatre: "Sri Lakshmi Cinemas",
        status: "ACTIVE"
      },
      {
        id: 2,
        name: "Ravi",
        email: "ravi@cinema.com",
        mobile: "9876543211",
        role: "MANAGER",
        theatre: "Sri Lakshmi Cinemas",
        status: "ACTIVE"
      },
      {
        id: 3,
        name: "Suresh",
        email: "suresh@cinema.com",
        mobile: "9876543212",
        role: "OPERATOR",
        theatre: "Sri Lakshmi Cinemas",
        status: "ACTIVE"
      },
      {
        id: 4,
        name: "Priya",
        email: "priya@cinema.com",
        mobile: "9876543213",
        role: "ACCOUNTANT",
        theatre: "Sri Lakshmi Cinemas",
        status: "ACTIVE"
      }
    ];
  }
};