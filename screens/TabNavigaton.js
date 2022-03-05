import * as React from 'react'
import 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './Home'
import Detail from './Detail'

const Tab = createBottomTabNavigator()

function TabNavigation() {
  return(
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Detail" component={Detail} /> 
    </Tab.Navigator>
    </NavigationContainer>

  )
}

export default TabNavigation