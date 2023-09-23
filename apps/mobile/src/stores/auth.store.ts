import {TAuthLoginData, TResponseAuthLogin} from 'feat/auth/api/auth.api';
import {MMKV} from 'react-native-mmkv';
import {create} from 'zustand';
import {StateStorage, createJSONStorage, persist} from 'zustand/middleware';

const storage = new MMKV();
const mmkvStorage: StateStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: name => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    return storage.delete(name);
  },
};

export type TAuthorStore = {
  data: TAuthLoginData | null;
};

export type TAuthorStoreAction = {
  updateAuth: (data: TAuthLoginData | null) => void;
};

const persistance = persist<TAuthorStore & TAuthorStoreAction>(
  set => ({
    data: null,
    updateAuth: data => set(prev => ({...prev, data})),
  }),
  {
    name: 'authStore',
    storage: createJSONStorage(() => mmkvStorage),
  },
);

const authStore = create<TAuthorStore & TAuthorStoreAction>()(persistance);

export default authStore;
