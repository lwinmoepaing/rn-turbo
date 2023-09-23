"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { REGISTER_API, registerAuthViaAPI } from "../api/auth.api";
import {
  TRegisterSchema,
  registerSchema,
} from "../validations/auth.validation";

const useAuthRegisterForm = () => {
  const registerMutate = useMutation({
    mutationKey: [REGISTER_API],
    mutationFn: registerAuthViaAPI,
  });

  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const { register, handleSubmit, reset } = form;

  const onSubmit: SubmitHandler<TRegisterSchema> = useCallback(
    async (data) => {
      if (!data) return;
      registerMutate.mutateAsync({ body: data });
    },
    [reset]
  );

  return {
    registerMutate,
    form,
    formControl: {
      name: { ...register("name") },
      email: { ...register("email") },
      password: { ...register("password") },
    },
    handleSubmit: handleSubmit(onSubmit),
  };
};

export default useAuthRegisterForm;
