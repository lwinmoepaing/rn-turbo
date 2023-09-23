"use client";

import { useCallback } from "react";
import authStore from "../stores/auth.store";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

function useAuth() {
  const router = useRouter();
  const [auth, updateAuth] = authStore((state) => [
    state.data,
    state.updateAuth,
  ]);

  const logOut = useCallback(() => {
    updateAuth(null);
    toast.success("Successfully logged out");
    router.push("/");
  }, []);

  return {
    auth,
    logOut,
    updateAuth,
  };
}
export default useAuth;
