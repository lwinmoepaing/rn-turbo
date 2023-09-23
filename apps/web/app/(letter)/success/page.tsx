import { Metadata } from "next";
import { metaOpenGraphHelper } from "@/utils/metaHelper";
import AuthWrapper from "@/components/Common/AuthWrapper";
import LoveLetterSuccess from "@/components/Letter/LoveLetterSuccess";

const title = "Chit Tal | ချစ်တဲ့အ​ကြောင်း​တွေ​ပြောမယ်။";
const description = "ချစ်တဲ့အ​ကြောင်း​တွေ​ပြောမယ်။";
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    ...metaOpenGraphHelper(),
  },
};

const SuccessPage = () => {
  return (
    <AuthWrapper>
      <LoveLetterSuccess />
    </AuthWrapper>
  );
};

export default SuccessPage;
