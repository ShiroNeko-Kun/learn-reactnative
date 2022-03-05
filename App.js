import * as React from 'react'
import 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons';

// import DrawerNavigation from './components/DrawerNavigation'

import Home from './screens/Home'
import Detail from './screens/Detail'
// import Profile from './screens/Profile'
// import Notification from './screens/Notification'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

function App() {
  return(
    <NavigationContainer>
      {/* <DrawerNavigation /> */}
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator> */}
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Detail') {
            iconName = focused ? 'reorder-three' : 'reorder-three-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Detail" component={Detail} /> 
    </Tab.Navigator>
    </NavigationContainer>

  )
}

export default App