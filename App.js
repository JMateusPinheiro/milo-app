import { createStackNavigator } from 'react-navigation';
import React from 'react'

import HomeScreen from './src/screens/HomeScreen';
import LogoImage from './src/components/LogoImage';

export default createStackNavigator({
  'Home':{
    screen: HomeScreen
  }
},{
  navigationOptions:{
    headerTitle: <LogoImage/>,
    headerStyle:{

    },
    headerTitleStyle:{

    }
  }
})
