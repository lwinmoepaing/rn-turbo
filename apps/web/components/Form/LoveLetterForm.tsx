"use client";

import useAuth from "@/hooks/useAuth";
import { TResponseCreateLetter } from "feat/letter/api/letter.api";
import useCreateLetterForm from "feat/letter/hook/useCreateLetterForm";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";
import EnvelopeIcon from "ui/src/Atoms/Envelope/Envelope.web";
import FormControlInput from "./FormControlInput";
import Button from "ui/src/Atoms/Button/Button.web";
import Nav from "../Nav/Nav";
import toast from "react-hot-toast";

function LoveLetterComponent({ token }: { token: string }) {
  const { auth } = useAuth();
  const router = useRouter();

  const {
    createLetterMutatation: letterMutation,
    handleSubmit,
    formControl,
    formErrors,
    form,
  } = useCreateLetterForm(token);

  useEffect(() => {
    try {
      if (letterMutation.isSuccess && !!letterMutation.data.data) {
        const letterData = letterMutation.data.data as TResponseCreateLetter;
        router.push(`/success?link=${letterData.short_link}`);
        toast.success("Successfully created letter");
      } else {
        const mes = letterMutation.data?.message as string;
        if (!!mes) {
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, [letterMutation.isSuccess, letterMutation.data]);

  useEffect(() => {
    try {
      if (letterMutation.isError && letterMutation.error) {
        // @ts-ignore
        const mes: any = letterMutation.error.message as string;
        if (!!mes) {
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, [letterMutation.isError]);

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-[70rem] mx-auto">
        <Nav />
        <h1 className="font-mm text-center pt-8 drop-shadow-md font-black text-white lg:text-2xl md:text-xl text-lg ">
          ချစ်တဲ့အ​ကြောင်း​တွေ​ပြောမယ်။
        </h1>

        <div className="px-4">
          <section className="lg:max-w-[31rem] mt-8 md:max-w-[30rem] sm:max-w-[27rem] p-4 rounded-md xxs:max-w-[26rem] bg-white mx-auto">
            <div className="flex flex-row mb-4">
              <p className="lg:pt-2 pt-1.5 pr-3 font-mm lg:text-lg md:text-base text-sm font-semibold text-lighter-text-4-dark">
                သို့
              </p>
              <div className="flex-1">
                <FormControlInput
                  name={"beloved_name"}
                  control={form.control}
                  error={formErrors.beloved_name}
                  placeholder="တစ်စုံတစ်ယောက်"
                />
              </div>
            </div>
            <textarea
              placeholder="အ​ကြောင်းအရာ"
              {...formControl.letter}
              className="bg-input bg-default md:text-base text-sm focus:outline-none focus:border-blue-500 focus:border-2 rounded-md py-3 px-2 w-full h-auto mb-3"
              rows={10}
            ></textarea>
            <div className="flex flex-row mb-4">
              <div className="">
                <div className="relative lg:w-12 md:w-11 w-10 h-auto">
                  <EnvelopeIcon />
                </div>
              </div>
              <p className="flex-1 pt-1 pr-3 font-mm lg:text-lg md:text-base text-sm font-semibold text-lighter-text-4-dark text-right">
                မှ &nbsp;
                <span>{auth?.name}</span>
              </p>
            </div>

            <Button
              loading={letterMutation.isLoading}
              disabled={letterMutation.isLoading}
              variant="dark"
              className="w-full font-mm"
              title="ဖန်တီးမယ်"
              onClick={handleSubmit}
            />
          </section>
        </div>
      </div>
    </main>
  );
}

const LoveLetterForm: React.FC<PropsWithChildren> = ({ children }) => {
  const { auth } = useAuth();

  if (!auth) return <></>;

  return <LoveLetterComponent token={auth.accessToken} />;
};

export default LoveLetterForm;
