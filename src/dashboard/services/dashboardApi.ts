export const authApi = {
  login: async (
    email: string,
    password: string
  ) => {
    return {
      token: "mock-jwt-token",
      user: {
        id: 1,
        name: "Kumar",
        email,
        role: "OWNER",
        password
      }
    };
  },

  logout: async () => {
    return {
      success: true
    };
  }
};