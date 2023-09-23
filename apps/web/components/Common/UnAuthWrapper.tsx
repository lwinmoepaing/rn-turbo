"use client";

import { TAuthLoginData } from "feat/auth/api/auth.api";
import { get } from "idb-keyval";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";

type UnAuthWrapperProps = {};

const UnAuthWrapper: React.FC<PropsWithChildren & UnAuthWrapperProps> = ({
  children,
}) => {
  const [auth, setAuth] = useState(false);
  const router = useRouter();

  const checkAuth = async () => {
    const check = await get("authStore");
    try {
      const {
        state: { data },
      } = JSON.parse(check) as { state: { data: TAuthLoginData } };
      if (data) {
        router.push("/create");
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (e) {}
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return auth ? <></> : <>{children}</>;
};

export default UnAuthWrapper;
