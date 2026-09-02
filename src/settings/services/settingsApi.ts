export const settingsApi = {
  getSettings: async () => {
    return {
      theatreName: "Sri Lakshmi Cinemas",
      city: "Hyderabad",
      whatsappDailyReport: true,
      emailReports: true,
      darkMode: false
    };
  }
};