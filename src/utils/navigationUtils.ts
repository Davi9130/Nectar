import {CommonActions, NavigationProp} from '@react-navigation/native';

export function navigateTo(
  name: string,
  nav: NavigationProp<ReactNavigation.RootParamList>,
  params = {},
) {
  nav?.dispatch(CommonActions.navigate({name, params}));
}
