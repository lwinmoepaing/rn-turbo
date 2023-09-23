"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LOGIN_API, loginAuthViaAPI } from "../api/auth.api";
import { TLoginSchema, loginSchema } from "../validations/auth.validation";

const useAuthLoginForm = () => {
  const loginMutate = useMutation({
    mutationKey: [LOGIN_API],
    mutationFn: loginAuthViaAPI,
    // throwOnError: true,
    onSuccess: (data) => {},
    onError: () => {}
  });

  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors },
  } = form;

  const onSubmit: SubmitHandler<TLoginSchema> = useCallback(
    async (data) => {
      if (!data) return;
      loginMutate.mutateAsync({ body: data });
    },
    [reset]
  );

  return {
    loginMutate,
    form,
    formErrors,
    formControl: {
      email: { ...register("email") },
      password: { ...register("password") },
    },
    handleSubmit: handleSubmit(onSubmit),
  };
};

export default useAuthLoginForm;
