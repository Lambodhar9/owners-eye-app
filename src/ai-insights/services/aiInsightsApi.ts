export const aiInsightsApi = {
  getInsights: async () => {
    return {
      forecast: {
        minimum: 345000,
        maximum: 385000,
        confidence: 82
      },

      insights: [
        {
          type: "positive",
          title: "Revenue Growth",
          message:
            "Today's collection is 18.4% higher than yesterday."
        },
        {
          type: "warning",
          title: "Screen 2",
          message:
            "Evening occupancy is significantly below average."
        },
        {
          type: "opportunity",
          title: "F&B",
          message:
            "F&B revenue per ticket is 9% below the weekly average."
        }
      ]
    };
  }
};