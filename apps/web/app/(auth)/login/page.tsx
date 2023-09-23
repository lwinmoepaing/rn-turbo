import UnAuthWrapper from "@/components/Common/UnAuthWrapper";
import LoginForm from "@/components/Form/LoginForm";

import { metaOpenGraphHelper } from "@/utils/metaHelper";
import { Metadata } from "next";

const title = "Chit Tal | အကောင့်ဝင်ရောက်မယ်";
const description = "အကောင့်ဝင်ရောက်မယ်";
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    ...metaOpenGraphHelper(),
  },
};

function LoginPage() {
  return (
    <UnAuthWrapper>
      <LoginForm />
    </UnAuthWrapper>
  );
}
export default LoginPage;
