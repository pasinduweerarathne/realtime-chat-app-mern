import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5000/api"
      : import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Will be set from App.jsx once Clerk is loaded
let getTokenFn = null;

export const setTokenGetter = (fn) => {
  getTokenFn = fn;
};

export const getClerkToken = async () => {
  if (!getTokenFn) return null;

  try {
    return await getTokenFn({ force: true });
  } catch (error) {
    console.warn("Failed to fetch Clerk token:", error);
    return null;
  }
};

axiosInstance.interceptors.request.use(async (config) => {
  return config;
});
