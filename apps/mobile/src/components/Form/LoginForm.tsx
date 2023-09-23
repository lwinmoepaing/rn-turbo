import {TAuthLoginData} from 'feat/auth/api/auth.api';
import useAuthLoginForm from 'feat/auth/hook/useAuthLoginForm';
import React, {useEffect} from 'react';
import Button from 'ui/src/Atoms/Button/Button.mobile';
import Envelope from 'ui/src/Atoms/Envelope/Envelope.mobile';
import FormControlInput from '../../components/Common/FormControlInput';
import TwText from '../../components/Common/TwText';
import TwView from '../../components/Common/TwView';
import useAuth from '../../hooks/useAuth';
import useToastHelper from '../../hooks/useToastHelper';
import useNavigator from '../../navigation/useNavigator';

const LoginForm = () => {
  const navigation = useNavigator();
  const {form, loginMutate, formErrors, handleSubmit} = useAuthLoginForm();
  const {showToast} = useToastHelper();
  const {updateAuth} = useAuth();

  useEffect(() => {
    try {
      if (loginMutate.isSuccess && !!loginMutate.data.data) {
        const loginData = loginMutate.data.data as TAuthLoginData;
        updateAuth(loginData);
        showToast('Successfully Logined 👋');
      } else {
        const mes = loginMutate.data?.message as string;
        if (!!mes)
          showToast(mes, {type: 'error', infoText: 'Login Information'});
      }
    } catch (e) {
      console.log(e);
    }
  }, [loginMutate.isSuccess, loginMutate.data]);

  useEffect(() => {
    try {
      if (loginMutate.isError && loginMutate.error) {
        // @ts-ignore
        const mes: any = loginMutate.error.message as string;
        if (!!mes)
          showToast(mes, {type: 'error', infoText: 'Login Information'});
      }
    } catch (e) {
      console.log(e);
    }
  }, [loginMutate.isError]);

  return (
    <TwView className="flex-1 justify-center">
      <TwView className="flex-col px-5 bg-white py-8 mx-5 rounded-lg">
        <Envelope size={'sm'} className="mb-4" />
        <TwText className="mb-2">Email</TwText>
        <FormControlInput
          name={'email'}
          control={form.control}
          error={formErrors.email}
          keyboardType="email-address"
        />
        <TwText className="mb-2">Password</TwText>
        <FormControlInput
          name={'password'}
          control={form.control}
          error={formErrors.password}
          secureTextEntry={true}
        />
        <Button
          variant="dark"
          title="Login"
          className="mt-2"
          loading={loginMutate.isLoading}
          onPress={handleSubmit}
        />
        <Button
          variant="outlined"
          title="Go Back"
          className="mt-2"
          disabled={loginMutate.isLoading}
          onPress={() => navigation?.goBack?.()}
        />
      </TwView>
    </TwView>
  );
};
export default LoginForm;
