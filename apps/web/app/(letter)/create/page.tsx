import AuthWrapper from "@/components/Common/AuthWrapper";
import LoveLetterForm from "@/components/Form/LoveLetterForm";
import { metaOpenGraphHelper } from "@/utils/metaHelper";
import { Metadata } from "next";

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

function CreatePage() {
  return (
    <AuthWrapper>
      <LoveLetterForm />
    </AuthWrapper>
  );
}
export default CreatePage;
