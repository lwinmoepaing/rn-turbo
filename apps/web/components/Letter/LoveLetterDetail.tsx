"use client";

import useLetterDetail from "feat/letter/hook/useLetterDetail";
import { decryptText } from "feat/letter/service/letter.services";
import Envelope from "ui/src/Atoms/Envelope/Envelope.web";
import Nav from "../Nav/Nav";

interface LoveLetterDetailProps {
  letterId: string;
}

const LoveLetterDetail = (props: LoveLetterDetailProps) => {
  const letter_id = props.letterId;
  const { letterQuery } = useLetterDetail(letter_id);

  const data = letterQuery.data?.data;

  return (
    <main className="w-full h-auto">
      <section className="w-full h-auto rounded-b-3xl bg-gradient-to-b from-primary to-secondary z-30 sticky top-0">
        <div className="max-w-[70rem] mx-auto">
          <Nav />

          <h1 className="text-center pt-8 drop-shadow-md font-black text-white lg:text-2xl md:text-xl text-lg font-noto-mm">
            {!!data?.beloved_name ? decryptText(data?.beloved_name) : ""}{" "}
            ကိုချစ်တယ်
          </h1>
          <div className="text-white lg:py-5 md:py-4 sm:py-3 py-2"></div>
        </div>
        <div className="flex flex-row justify-center items-center relative top-[24px] z-40">
          <div className="px-[2.5rem] py-[0.5rem] bg-[#e7e7e7] rounded-md">
            <div className="lg:w-[3rem] md:w-[3.3rem] w-[3.3rem] h-auto z-50">
              <Envelope />
            </div>
          </div>
        </div>
      </section>

      {letterQuery.isLoading ? (
        <div className="text-center w-full mt-8">Loading...</div>
      ) : (
        <section className="-mt-[1rem] lg:max-w-[34rem] md:max-w-[30rem] sm:max-w-[33rem] h-auto mx-auto px-5 lg:py-10 md:py-8 sm:py-6 py-4">
          <p className="pt-8 pb-4 lg:text-lg md:text-base text-sm font-noto-mm md:font-medium font-normal text-lighter-text-4-dark">
            <>
              <span className="pr-2">သို့</span>
              <span>
                {!!data?.beloved_name ? decryptText(data?.beloved_name) : ""}{" "}
              </span>
            </>
          </p>
          <textarea
            rows={17}
            disabled
            className="bg-white resize-none leading-7 lg:text-lg md:text-base text-sm font-noto-mm md:font-medium font-normal text-lighter-text-4-dark w-full h-auto"
          >
            {!!data?.letter ? decryptText(data?.letter) : ""}
          </textarea>
          <p className="pt-3 pb-8 lg:text-lg md:text-base text-sm font-noto-mm md:font-medium font-normal text-lighter-text-4-dark flex flex-row justify-end">
            <>
              <span className="pr-2">မှ</span>
              <span>{data?.author_name}</span>
            </>
          </p>
        </section>
      )}
    </main>
  );
};

export default LoveLetterDetail;
