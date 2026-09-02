export const showsApi = {
  getTodayShows: async () => {
    return [
      {
        id: 1,
        movie: "Pushpa 3",
        screen: "Screen 1",
        time: "10:30 AM",
        sold: 142,
        capacity: 180,
        collection: 42600
      },
      {
        id: 2,
        movie: "Pushpa 3",
        screen: "Screen 2",
        time: "1:30 PM",
        sold: 178,
        capacity: 220,
        collection: 53400
      },
      {
        id: 3,
        movie: "Coolie",
        screen: "Screen 1",
        time: "6:30 PM",
        sold: 210,
        capacity: 240,
        collection: 63000
      },
      {
        id: 4,
        movie: "Coolie",
        screen: "Screen 3",
        time: "7:00 PM",
        sold: 188,
        capacity: 250,
        collection: 57600
      },
      {
        id: 5,
        movie: "Evening Special",
        screen: "Screen 2",
        time: "9:30 PM",
        sold: 124,
        capacity: 400,
        collection: 96000
      }
    ];
  }
};