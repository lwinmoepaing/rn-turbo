import Nav from "@/components/Nav/Nav";
import { metaOpenGraphHelper } from "@/utils/metaHelper";
import { Metadata } from "next";
import Image from "next/image";

const title = "Chit Tal | ဖန်တီးသူများအကြောင်း";
const description =
  "အကိုလွင်မိုးပိုင် က​တော့လက်ရှိ Senior Frontend Dev position နဲ့အလုပ် လုပ်​နေပါတယ်။ HTML & CSS - Beginner To Super Beginner စာလုပ်​လေးကိုလည်း ​ရေးသားလျက်ရှိပါတယ်။ Burmese Youth In Tech community မှာလည်း အချိန်အားလပ်တဲ့အခါ experience sharing ​တွေလုပ်​ပေး​လေ့ရှိပါတယ်။ Facebook မှာလည်း experience sharing post ​လေး​တွေ တင်​လေ့ရှိပါတယ်။";
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    ...metaOpenGraphHelper(),
  },
};

const AboutUs = () => {
  return (
    <main className="w-full h-auto">
      <section className="w-full h-auto rounded-b-3xl bg-gradient-to-b from-primary to-secondary z-40 sticky top-0">
        <div className="max-w-[70rem] mx-auto">
          <Nav />
          <h1 className="text-center pt-8 drop-shadow-md font-black text-white lg:text-2xl md:text-xl text-lg font-mm">
            ဖန်တီးသူများအကြောင်း
          </h1>
          <div className="lg:py-16 md:py-14 sm:py-12 py-11"></div>
        </div>
      </section>
      <section className="lg:max-w-[34rem] md:max-w-[30rem] sm:max-w-[33rem] h-auto mx-auto px-5 lg:py-16 md:py-14 sm:py-12 py-11">
        <div className="flex items-center">
          <div className="relative lg:w-11 lg:h-11 sm:w-10 sm:h-10 w-8 h-8">
            <Image
              src="/lwin_moe_paing_profile.jpg"
              alt="LMP Profile"
              fill
              className="rounded-full"
            />
          </div>
          <p className="sm:text-lg text-base md:text-xl ml-4 font-extrabold text-lighter-text-4-dark pt-1">
            Lwin Moe Paing
          </p>
        </div>
        <p className="pt-5 md:pt-6 pb-12 sm:pb-14 md:pb-14 lg:pb-16 lg:text-lg md:text-base text-sm font-mm md:font-medium font-normal text-lighter-text-4-dark">
          အကိုလွင်မိုးပိုင် က​တော့လက်ရှိ Senior Frontend Dev position နဲ့အလုပ်
          လုပ်​နေပါတယ်။ HTML & CSS - Beginner To Super Beginner
          စာလုပ်​လေးကိုလည်း ​ရေးသားလျက်ရှိပါတယ်။ Burmese Youth In Tech community
          မှာလည်း အချိန်အားလပ်တဲ့အခါ experience sharing
          ​တွေလုပ်​ပေး​လေ့ရှိပါတယ်။ Facebook မှာလည်း experience sharing post
          ​လေး​တွေ တင်​လေ့ရှိပါတယ်။
        </p>
        <div className="flex items-center">
          <div className="relative lg:w-11 lg:h-11 sm:w-10 sm:h-10 w-8 h-8">
            <Image
              src="/omega_profile.jpg"
              alt="Omega Profile"
              fill
              className="rounded-full"
            />
          </div>
          <p className="sm:text-lg text-base md:text-xl ml-4 font-extrabold text-lighter-text-4-dark pt-1">
            Omega
          </p>
        </div>
        <p className="pb-8 md:pt-6 pt-5 lg:text-lg md:text-base text-sm font-mm md:font-medium font-normal text-lighter-text-4-dark">
          ကျွန်​တော်က​တော့ omega ပဲဖြစ်ပါတယ်။ Bro Lwin Moe Paing နဲ့
          ကျွန်​တော်နဲ့ အတူ​နောက်ပိုင်း impact ရှိမဲ့ project ​လေး​တွေ build
          ပြီး launch ​ပေးဖို့အစီအစဉ်​တွေရှိပါတယ်။ အခုလည်း BoostUp ဆိုတဲ့
          project ​လေးတစ်ခုထွက်လာဖို့ရှိပါတယ်။ ဘယ်လို project
          ​လေးလဲဆိုတာသိချင်ရင်​တော့ အကို Lwin Moe Paing ကို facebook မှာ follow
          ထားဖို့ မ​မေ့ပါနဲ့​နော်။
        </p>
      </section>
    </main>
  );
};

export default AboutUs;
