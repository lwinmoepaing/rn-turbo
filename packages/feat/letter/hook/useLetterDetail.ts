"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  GET_LETTER_DETAIL_API,
  TResponseLetterDetailAPI,
  getLetterDetailViaAPI,
} from "../api/letter.api";

const useLetterDetail = (id: string) => {
  const router = useRouter();

  const [query, setQuery] = useState<string>("");

  const letterQuery = useQuery<TResponseLetterDetailAPI, Error>({
    queryKey: [GET_LETTER_DETAIL_API],
    queryFn: () =>
      getLetterDetailViaAPI({ query, id }),
    onSuccess: (data) => {},
    onError: () => {},
  });

  return {
    letterQuery,
    query,
    setQuery,
  };
};

export default useLetterDetail;
