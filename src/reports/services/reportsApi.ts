export const reportsApi = {
  generate: async (
    from: string,
    to: string,
    type: string
  ) => {
    return {
      from,
      to,
      type,
      grossCollection: 8245600,
      tickets: 28421,
      occupancy: 68,
      expenses: 645000,
      netCollection: 7600600
    };
  }
};