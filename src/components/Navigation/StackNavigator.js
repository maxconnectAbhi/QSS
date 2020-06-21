import { createAppContainer, createStackNavigator } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';

const AppNav = createStackNavigator(
  {
    Home:{screen:DrawerNavigator}
  }, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    header:null,
  },
}
);

export default createAppContainer(AppNav)