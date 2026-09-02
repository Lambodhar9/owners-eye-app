const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8080/api";

export const apiClient = {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(
      `${API_BASE_URL}${url}`
    );

    if (!response.ok) {
      throw new Error("API request failed");
    }

    return response.json();
  },

  async post<T>(
    url: string,
    body: unknown
  ): Promise<T> {
    const response = await fetch(
      `${API_BASE_URL}${url}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );

    if (!response.ok) {
      throw new Error("API request failed");
    }

    return response.json();
  }
};