"use client";
import { usePathname, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import Nav from "../Nav/Nav";
import ChittalQrCode from "../Common/ChittalQrCode";
import Button from "ui/src/Atoms/Button/Button.web";

const LoveLetterSuccess = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const link = searchParams.get("link") as string;

  const copyToClipBoard = () => {
    try {
      const host = window.location.origin;
      navigator.clipboard.writeText(`${host}/letter/${link}`);
      toast.success("Copied to clipboard.");
    } catch (e) {}
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-primary to-secondary">
      <div className="max-w-[70rem] mx-auto">
        <Nav />
        <h1 className="text-center pt-8 drop-shadow-md font-black text-white lg:text-2xl md:text-xl text-lg font-mm">
          ချစ်တဲ့အ​ကြောင်း​တွေ​ပြောမယ်။
        </h1>
        <section className="max-w-[15rem] mt-8 px-4 pt-4 pb-2 rounded-md bg-white mx-auto flex flex-col justify-center items-center">
          <ChittalQrCode link={link} size={180} />
          <h1 className="font-black lg:text-2xl md:text-xl text-lg text-center pt-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-4-gradient to-orange-4-gradient">
            Chit Tal
          </h1>

          <Button
            variant={"dark"}
            className="w-full mt-4"
            onClick={copyToClipBoard}
            title="Copy Link"
          />
        </section>

        <div className="max-w-[70rem] mx-auto">
          <div className="bg-black bg-opacity-20 mt-4 rounded-xl font-mm px-5 max-w-[38rem] mx-auto pt-8 pb-8 text-center text-base md:font-medium font-normal text-white">
            <p>
              အခု link ​လေးကို copy လုပ်ပြီး သင်​ရေးထားတာကို
              ဖတ်​စေချင်တဲ့သူကိုသွား​ပေးလိုက်ပါ။ ဒီစာ​လေးကို
              အချိန်မ​ရွေးပြန်ဖတ်နိုင်ဖို့အတွက်လည်းအခု link ​လေးကို
              မှတ်ထား​ပေးရန်လိုအပ်ပါသည်။
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoveLetterSuccess;
