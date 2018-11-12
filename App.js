import { createStackNavigator } from 'react-navigation';

import HomePage from './src/screens/HomeScreen';


export default createStackNavigator({
  'Home':{
    screen: HomeScreen
  }
},{
  navigationOptions:{
    title: 'Game Rating',
    headerStyle:{

    },
    headerTitleStyle:{

    }
  }
})
