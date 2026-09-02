export const alertsApi = {
  getAlerts: async () => {
    return [
      {
        id: 1,
        severity: "error",
        title: "Cash Variance",
        message:
          "Reported cash is ₹4,200 lower than expected."
      },
      {
        id: 2,
        severity: "warning",
        title: "Low Occupancy",
        message:
          "Screen 2 evening show occupancy is only 31%."
      },
      {
        id: 3,
        severity: "success",
        title: "Target Crossed",
        message:
          "Daily collection crossed ₹3 lakh."
      }
    ];
  }
};