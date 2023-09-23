import {TResponseCreateLetter} from 'feat/letter/api/letter.api';
import useCreateLetterForm from 'feat/letter/hook/useCreateLetterForm';
import React, {useEffect} from 'react';
import Button from 'ui/src/Atoms/Button/Button.mobile';
import Envelope from 'ui/src/Atoms/Envelope/Envelope.mobile';
import useAuth from '../../hooks/useAuth';
import useToastHelper from '../../hooks/useToastHelper';
import useNavigator from '../../navigation/useNavigator';
import FormControlInput from '../Common/FormControlInput';
import TwText from '../Common/TwText';
import TwView from '../Common/TwView';

const CreateLetterForm = () => {
  const navigation = useNavigator();
  const {auth} = useAuth();
  const {
    form,
    createLetterMutatation: letterMutation,
    formErrors,
    handleSubmit,
  } = useCreateLetterForm(auth?.accessToken || '');

  const {showToast} = useToastHelper();

  useEffect(() => {
    try {
      if (letterMutation.isSuccess && !!letterMutation.data.data) {
        const letterData = letterMutation.data.data as TResponseCreateLetter;
        showToast('Successfully Created Letter 👋', {
          infoText: 'Letter Information',
        });
        navigation.push('LetterShareScreen', {
          shortLink: letterData.short_link,
        });
        form.reset();
      } else {
        const mes = letterMutation.data?.message as string;
        if (!!mes)
          showToast(mes, {type: 'error', infoText: 'Letter Information'});
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
        if (!!mes)
          showToast(mes, {type: 'error', infoText: 'Letter Information'});
      }
    } catch (e) {
      console.log(e);
    }
  }, [letterMutation.isError]);

  return (
    <TwView className="flex-1 mt-5">
      <TwView className="flex-col px-5 bg-white py-8 rounded-lg">
        <TwView className="flex-row">
          <TwView className="flex-col mt-3 mr-3">
            <TwText className="font-mm">သို့</TwText>
          </TwView>
          <TwView className="flex-1">
            <FormControlInput
              className=""
              placeholder="တစ်ယောက်ယောက်"
              name={'beloved_name'}
              control={form.control}
              error={formErrors.beloved_name}
            />
          </TwView>
        </TwView>

        <TwView className="mt-2">
          <FormControlInput
            className="h-60"
            placeholder="အကြောင်းအရာ"
            name={'letter'}
            control={form.control}
            error={formErrors.letter}
            secureTextEntry={true}
            multiline={true}
            numberOfLines={4}
          />
        </TwView>

        <TwView className="flex-row items-center">
          <TwView className="flex-1 h-10 justify-center">
            <Envelope size={'sm'} className="h-10 w-8" />
          </TwView>
          <TwView className="flex-1 h-10 justify-center items-end pr-1">
            <TwText>မှ {auth?.name}</TwText>
          </TwView>
        </TwView>
      </TwView>
      <Button
        variant="dark"
        title="ဖန်တီးမယ်"
        className="mt-4"
        loading={letterMutation.isLoading}
        onPress={handleSubmit}
      />
    </TwView>
  );
};
export default CreateLetterForm;
