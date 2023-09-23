"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CREATE_LETTER_API, createLetterViaAPI } from "../api/letter.api";
import {
  TCreateLetterSchema,
  createLetterSchema,
} from "../validations/letter.validation";

const useCreateLetterForm = (token: string) => {
  const createLetterMutatation = useMutation({
    mutationKey: [CREATE_LETTER_API],
    mutationFn: createLetterViaAPI,
    onSuccess: (data) => {},
    onError: () => {},
  });

  const form = useForm<TCreateLetterSchema>({
    resolver: zodResolver(createLetterSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors: formErrors },
  } = form;

  const onSubmit: SubmitHandler<TCreateLetterSchema> = useCallback(
    async (data) => {
      if (!data) return;
      createLetterMutatation.mutateAsync({ body: data, accessToken: token });
    },
    []
  );

  return {
    createLetterMutatation,
    form,
    formErrors,
    formControl: {
      letter: { ...register("letter") },
      beloved_name: { ...register("beloved_name") },
    },
    handleSubmit: handleSubmit(onSubmit),
  };
};

export default useCreateLetterForm;
