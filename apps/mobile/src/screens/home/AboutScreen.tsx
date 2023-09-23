import React from 'react';
import Button from 'ui/src/Atoms/Button/Button.mobile';
import {Text} from 'react-native';
import useNavigator from '../../navigation/useNavigator';
import TwView from '../../components/Common/TwView';
import TwSafeAreaView from '../../components/Common/TwSafeAreaView';
const AboutScreen = () => {
  const navigation = useNavigator();

  return (
    <TwSafeAreaView className="flex-1">
      <TwView className="flex-1 px-5">
        <Button
          title="Go to Back"
          onPress={() => {
            try {
              navigation.goBack();
            } catch (e) {
              console.log(e);
            }
          }}
        />
        <Text>AboutScreen</Text>
      </TwView>
    </TwSafeAreaView>
  );
};
export default AboutScreen;
