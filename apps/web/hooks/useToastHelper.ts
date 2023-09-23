"use client";

import Toast from "react-native-toast-message";
interface IToastOptions {
  type?: "error" | "success";
  infoText?: string;
}

const useToastHelper = () => {
  const showToast = (
    mes: string,
    { type = "success", infoText = "" }: IToastOptions = {}
  ) => {
    Toast.show({
      type: type,
      text1: mes,
      text2: infoText,
    });
  };

  return {
    showToast,
  };
};
export default useToastHelper;
