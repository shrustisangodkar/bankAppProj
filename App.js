
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Buy from './src/screens/Buy';
import Dashboard from './src/screens/Dashboard';
import Login from './src/screens/Login';
import Sell from './src/screens/Sell';
import Swap from './src/screens/Swap';
const navigator = createStackNavigator(
  {
    Login:Login,
    Dashboard:Dashboard,
    Buy:Buy,
    Sell:Sell,
    Swap:Swap
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);