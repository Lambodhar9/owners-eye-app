export const collectionApi = {
  getDailyCollection: async () => {
    return {
      gross: 384650,
      ticketCollection: 321400,
      foodCollection: 48250,
      parkingCollection: 15000,
      expenses: 24500,
      net: 360150,

      paymentMethods: {
        cash: 48200,
        upi: 112750,
        card: 74500,
        online: 149200
      },

      tickets: 1248,
      occupancy: 72
    };
  }
};