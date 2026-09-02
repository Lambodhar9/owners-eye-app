const API_BASE_URL = import.meta.env.VITE_API_URL;

if (!API_BASE_URL) {
  throw new Error(
    "VITE_API_URL is not configured for the current environment."
  );
}

export const ENV = {
  appName:
    import.meta.env.VITE_APP_NAME ||
    "Cinema Owner's Eye",

  environment:
    import.meta.env.VITE_ENV,

  apiUrl: API_BASE_URL,
};