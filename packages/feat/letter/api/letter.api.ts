import config from "../../config/config";
import checkIsResponseSuccess from "../../utils/checkIsResponseSuccess";
import { withAccessToken } from "../../utils/withAccessToken";
import { TCreateLetterSchema } from "../validations/letter.validation";

/**
 * Create Letter Via API
 */
export const CREATE_LETTER_API = `${config.BASE_URL}/love-letter/create`;

export type TCreateLetterViaAPI = {
  body: TCreateLetterSchema;
  accessToken: string;
  options?: RequestInit;
};

export type TResponseCreateLetter = {
  id: number;
  letter: string;
  beloved_name: string;
  short_link: string;
  user_id: string;
  is_public: boolean;
  key_of_letter: string;
};

export type TResponseCreateLetterAPI = ResponseAPI<TResponseCreateLetter>;

export const createLetterViaAPI = async ({
  body,
  accessToken,
}: TCreateLetterViaAPI) => {
  const requestOptions: RequestInit = {
    method: "POST",
    body: JSON.stringify(body),
    headers: withAccessToken(accessToken),
  };

  const res = await fetch(CREATE_LETTER_API, requestOptions);

  const resData = (await res.json()) as TResponseCreateLetterAPI;

  if (!checkIsResponseSuccess(res.status)) {
    throw new Error(resData.message);
  }

  return resData;
};

/**
 * Get Letter Detail Via API
 */
export const GET_LETTER_DETAIL_API = `${config.BASE_URL}/love-letter/detail`;

export type TGetLetterViaAPI = {
  id: string;
  query?: string;
  options?: RequestInit;
};

export type TResponseLetterDetail = {
  id: number;
  letter: string;
  beloved_name: string;
  short_link: string;
  user_id: string;
  is_public: boolean;
  key_of_letter: string;
  created_at: string;
  updated_at: string;
};

export type TResponseLetterDetailAPI = ResponseAPI<TResponseCreateLetter>;

export const getLetterDetailViaAPI = async ({
  query,
  id,
}: TGetLetterViaAPI) => {
  const requestOptions: RequestInit = {
    ...config.requestOptions,
  };

  const res = await fetch(
    `${GET_LETTER_DETAIL_API}/${id}?${query ? query : ""}`,
    requestOptions
  );

  const resData = (await res.json()) as TResponseLetterDetailAPI;

  if (!checkIsResponseSuccess(res.status)) {
    throw new Error(resData.message);
  }

  return resData;
};
