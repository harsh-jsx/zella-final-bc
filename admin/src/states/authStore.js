import { create } from "zustand";

export const useAuthStore = create((set, get) => ({
  currentUserData: null,
  isLoggedIn: false,
  zustandError: "",

  setZustandError: (error) => set({ zustandError: error }),

  setCurrentUserData: (data) =>
    set({ currentUserData: data, isLoggedIn: true }),
}));
