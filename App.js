import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screens/Home'
import Detail from './screens/Detail'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function App() {
  return(
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: "Ini Halaman Home"}} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator> */}

    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Detail" component={Detail} /> 
    </Tab.Navigator>
    </NavigationContainer>

  )
}

export default App