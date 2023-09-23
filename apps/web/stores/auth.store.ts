import { TAuthLoginData } from "feat/auth/api/auth.api";
import { del, get, set } from "idb-keyval";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const IDBStorage = {
  getItem: async (name: string) => {
    if (typeof indexedDB === "undefined") {
      return null;
    }
    const data = await get<string>(name);
    return data || null;
  },
  setItem: async (name: string, value: unknown) => {
    if (typeof indexedDB === "undefined") {
      return;
    }
    await set(name, value);
  },
  removeItem: async (name: string) => {
    if (typeof indexedDB === "undefined") {
      return;
    }
    await del(name);
  },
};

export type TAuthorStore = {
  data: TAuthLoginData | null;
};

export type TAuthorStoreAction = {
  updateAuth: (data: TAuthLoginData | null) => void;
};

const persistance = persist<TAuthorStore & TAuthorStoreAction>(
  (set) => ({
    data: null,
    updateAuth: (data) => set((prev) => ({ ...prev, data })),
  }),
  {
    name: "authStore",
    storage: createJSONStorage(() => IDBStorage),
  }
);

const authStore = create<TAuthorStore & TAuthorStoreAction>()(persistance);

export default authStore;
