import 'react-native-gesture-handler'
import { StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Profile from './Profile'
import Notification from './Notification'

const Drawer = createDrawerNavigator()

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <View style={ styles.container}>
      <Drawer.Navigator>
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },

});