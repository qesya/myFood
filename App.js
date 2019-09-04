import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './screens/SearchScreen';
 
const navigator = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    initialRouteName: 'Screen',
    defaultNavigationOptions: {
      title: 'BusinessSearch'
    }
  }
);
const AppContainer = createAppContainer(navigator);
export default AppContainer;