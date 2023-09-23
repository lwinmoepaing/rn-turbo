import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from './HomeNavigator/HomeNavigator';
import {LetterStackParamList} from './LetterNavigator/LetterNavigator';

/**
 * This is Typed Safe Navigator
 * For Our RootNavigation Stacks
 */

type UseNavigationProps = NativeStackNavigationProp<
  HomeStackParamList & LetterStackParamList
>;

const useNavigator = () => {
  const navigation = useNavigation<UseNavigationProps>();

  return navigation;
};

export default useNavigator;
