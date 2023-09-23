import LoveLetterDetail from "@/components/Letter/LoveLetterDetail";
import { metaOpenGraphHelper } from "@/utils/metaHelper";
import { Metadata } from "next";

interface LetterDetailPageProps {
  params: {
    id: string;
  };
}

const title = "Chit Tal | ပေးစာလက်ခံပေးပါ";
const description = "အခုပဲအချစ်စာ​​လေး​ ဖတ်ကြည့်လိုက်ပါ";
export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    ...metaOpenGraphHelper(),
  },
};

const LetterDetail = (props: LetterDetailPageProps) => {
  return <LoveLetterDetail letterId={props.params.id} />;
};

export default LetterDetail;
