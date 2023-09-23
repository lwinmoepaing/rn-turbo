import config from "../../config/config";
import checkIsResponseSuccess from "../../utils/checkIsResponseSuccess";
import { TLoginSchema } from "../validations/auth.validation";

/**
 * Login Authentication Via API
 */
export const LOGIN_API = `${config.BASE_URL}/auth/login`;

export type TloginAuthVia = { body: TLoginSchema; options?: RequestInit };

export type TAuthLoginData = {
  id: string;
  name: string;
  email: string;
  accessToken: string;
};

export type TResponseAuthLogin = ResponseAPI<TAuthLoginData>;

export const loginAuthViaAPI = async ({ body }: TloginAuthVia) => {
  const requestOptions: RequestInit = {
    ...config.requestOptions,
    method: "POST",
    body: JSON.stringify(body),
  };

  const res = await fetch(LOGIN_API, requestOptions);

  const resData = (await res.json()) as TResponseAuthLogin;

  if (!checkIsResponseSuccess(res.status)) {
    throw new Error(resData.message);
  }

  return resData;
};

/**
 * Register Authentication Via API
 */
export const REGISTER_API = `${config.BASE_URL}/auth/register`;

export type TRegisterAuthVia = { body: TLoginSchema; options?: RequestInit };

export type TResponseAuthRegister = ResponseAPI<{
  id: string;
  name: string;
  email: string;
}>;

export const registerAuthViaAPI = async ({ body }: TRegisterAuthVia) => {
  const requestOptions: RequestInit = {
    ...config.requestOptions,
    method: "POST",
    body: JSON.stringify(body),
  };
  const res = await fetch(REGISTER_API, requestOptions);
  const resData = (await res.json()) as TResponseAuthRegister;

  if (!checkIsResponseSuccess(res.status)) {
    throw new Error(resData.message);
  }

  return resData;
};
