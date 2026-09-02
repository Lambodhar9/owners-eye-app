export const rolesApi = {
  getRoles: async () => {
    return [
      {
        name: "OWNER",
        description:
          "Full system access"
      },
      {
        name: "MANAGER",
        description:
          "Theatre operational access"
      },
      {
        name: "ACCOUNTANT",
        description:
          "Financial and reports access"
      },
      {
        name: "OPERATOR",
        description:
          "Daily operational access"
      }
    ];
  }
};