import Button from "ui/src/Atoms/Button/Button.web";
import DashboardLandingImage from "ui/src/Molecules/DashboardLandingImage/DashboardLandingImage.web";
import DashboardWaitImage from "ui/src/Molecules/DashboardWaitImage/DashboardWaitImage.web";
import Nav from "@/components/Nav/Nav";
import { Metadata } from "next";
import { metaOpenGraphHelper } from "@/utils/metaHelper";
import LinkButton from "@/components/Common/LinkButton";

const title = "Chit Tal | Welcome Home Page";
const description =
  "ကျွန်​တော်တို့မှာ ကိုယ်ချစ်ရတဲ့သူ​တွေ၊ တန်ဖိုးထားရတဲ့သူ​တွေရှိကြမှာပါ။ ကိုယ်တန်ဖိုးထားရတဲ့အ​ကြောင်း​တွေ၊ ချစ်ရတဲ့အ​ကြောင်း​တွေကို ကိုယ့်မိသားစုဝင်​တွေကိုပဲဖြစ်ဖြစ်၊ သူများ၏ သား သမီးကိုပဲဖြစ်ဖြစ် အခုပဲအချစ်စာ​​လေး​ရေးပြီး​ပြောပြလိုက်ပါ။";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    ...metaOpenGraphHelper(),
  },
};

export default function HomePage(): JSX.Element {
  return (
    <main className="w-full h-auto">
      <section className="w-full h-auto bg-gradient-to-b from-primary to-secondary">
        <div className="max-w-[70rem] mx-auto">
          <Nav />
          <div className="w-full h-auto flex flex-row justify-center">
            <div className="relative h-auto mt-2 top-[3px] flex justify-center items-center">
              <DashboardLandingImage size={"lg"} />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-auto py-11">
        <div className="max-w-[70rem] mx-auto">
          <LinkButton
            href="/create"
            variant={"dark"}
            className="lg:w-[25rem] md:w-[20rem] w-[15rem] mx-auto"
            title="​​ရေးမယ်"
            isNeededAuth={true}
          />

          <div className="w-full h-auto flex flex-row justify-center pt-5">
            <div className="relative h-auto mt-5 flex justify-center items-center">
              <DashboardWaitImage size={"sm"} />
            </div>
          </div>
          <p className="font-mm px-5 max-w-[38rem] mx-auto pt-8 pb-8 text-center lg:text-lg sm:text-sm md:font-medium font-normal text-lighter-text-4-dark">
            ကျွန်​တော်တို့မှာ ကိုယ်ချစ်ရတဲ့သူ​တွေ၊
            တန်ဖိုးထားရတဲ့သူ​တွေရှိကြမှာပါ။ ကိုယ်တန်ဖိုးထားရတဲ့အ​ကြောင်း​တွေ၊
            ချစ်ရတဲ့အ​ကြောင်း​တွေကို ကိုယ့်မိသားစုဝင်​တွေကိုပဲဖြစ်ဖြစ်၊ သူများ၏
            သား သမီးကိုပဲဖြစ်ဖြစ် အခုပဲအချစ်စာ​​လေး​ရေးပြီး​ပြောပြလိုက်ပါ။
          </p>
        </div>
      </section>
      <section className="w-full h-auto bg-gradient-to-b from-secondary to-primary">
        <h3 className="font-mm text-center pt-16 font-black text-white lg:text-2xl md:text-xl text-lg">
          👀 ဘာ​ကြောင့်ဖန်တီးဖြစ်ခဲ့တာလဲ။
        </h3>
        <div className="max-w-[70rem] mx-auto">
          <p className="font-mm px-5 max-w-[38rem] mx-auto pt-8 pb-8 text-center lg:text-lg sm:text-sm md:font-medium font-normal text-white">
            ယခု site ​လေးကို ဖန်တီးဖြစ်သွားပုံ​လေးက​တော့ 18Aug2023 မှာ Bro Lwin
            Moe Paing နဲ့ ကျွန်​တော် Omega တို့နှစ်​ယောက် BoostUp Project
            ​လေးအ​ကြောင်း စကား​ပြော​နေရင်း available ဖြစ်တဲ့ domain name ​တွေ
            explore လုပ်​နေရာက​နေ အ​ပျော် project ​လေးတစ်ခု
            လုပ်ဖို့​ပြောဖြစ်သွားပြီး ယခု chit-tal.com
            ကိုလုပ်ဖြစ်သွားတာဖြစ်ပါတယ်။
          </p>

          <LinkButton
            href="/about-us"
            variant={"dark"}
            className="lg:w-[25rem] md:w-[20rem] w-[15rem] mx-auto"
            title="ဖန်တီးသူများ"
          />
          <div className="pb-16"></div>
        </div>
      </section>
    </main>
  );
}
