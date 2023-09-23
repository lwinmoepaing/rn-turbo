"use client";

import Nav from "@/components/Nav/Nav";
import useAuth from "@/hooks/useAuth";
import { TAuthLoginData } from "feat/auth/api/auth.api";
import useAuthLoginForm from "feat/auth/hook/useAuthLoginForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Button from "ui/src/Atoms/Button/Button.web";
import FormControlInput from "./FormControlInput";

export default function LoginForm() {
  const { loginMutate, handleSubmit, formControl, formErrors, form } =
    useAuthLoginForm();
  const { updateAuth, auth } = useAuth();
  const router = useRouter();

  useEffect(() => {
    try {
      if (loginMutate.isSuccess && !!loginMutate.data.data) {
        const loginData = loginMutate.data.data as TAuthLoginData;
        updateAuth(loginData);
        toast.success("Successfully Logined 👋");
        router.push("/create");
      } else {
        const mes = loginMutate.data?.message as string;
        if (!!mes) toast.error(mes);
      }
    } catch (e) {
      console.log(e);
    }
  }, [loginMutate.isSuccess, loginMutate.data]);

  useEffect(() => {
    try {
      if (loginMutate.isError && loginMutate.error) {
        // @ts-ignore
        const mes: any = loginMutate.error.message as string;

        if (!!mes) toast.error(mes);
      }
    } catch (e) {
      console.log(e);
    }
  }, [loginMutate.isError]);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-[70rem] mx-auto">
        <Nav />
        <h1 className="font-mm text-center pt-8 drop-shadow-md font-black text-white lg:text-2xl md:text-xl text-lg ">
          အကောင့်အရင်ဝင်မယ်
        </h1>
        <div className="px-4">
          <section className="lg:max-w-[31rem] mt-8 md:max-w-[30rem] sm:max-w-[27rem] p-4 rounded-md xxs:max-w-[26rem] bg-white mx-auto">
            <div>
              <p className="font-mm lg:pt-2 mb-3 font-mm lg:text-lg md:text-base text-sm font-semibold text-lighter-text-4-dark">
                အီးမေးလ်
              </p>

              <FormControlInput
                name={"email"}
                control={form.control}
                error={formErrors.email}
              />
            </div>
            <div className="mb-5">
              <p className="font-mm lg:pt-2 mb-3 font-mm lg:text-lg md:text-base text-sm font-semibold text-lighter-text-4-dark">
                စကားဝှက်
              </p>
              <FormControlInput
                name={"password"}
                control={form.control}
                error={formErrors.password}
                type="password"
              />
            </div>

            <Button
              loading={loginMutate.isLoading}
              disabled={loginMutate.isLoading}
              variant="dark"
              className="w-full font-mm"
              title="ဝင်မယ်"
              onClick={handleSubmit}
            />
          </section>
        </div>

        <div className="text-white py-10"></div>
        <p className="font-mm lg:text-xl md:text-lg text-base py-6 text-white text-center">
          🤭 လူ့ဘဝတခဏတာမှာ​ပြောချင်တာ​တွေကိုအချိန်မဆွဲပါနဲ့။
        </p>
      </div>
    </main>
  );
}
