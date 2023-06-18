import { create } from "zustand";

const useAuth = create((set) => ({
  accessToken: null,
  refreshToken: null,
  setTokens: (access, refresh) => set({ accessToken: access, refreshToken: refresh }),
  //   clearToken: () => set({ accessToken: null, refreshToken: null }),
}));

export default useAuth;
