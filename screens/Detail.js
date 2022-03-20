// import 'react-native-gesture-handler'
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navirom './Notification'

// const Drawer = createDrawerNavigator()

// import Profile from './Profile'
// import Notification f
export default function Detail({ navigation, route }) {
  return (
  <View style={styles.container}>
      <Text style={{ color: '#fff'}}>ini halaman detail </Text>
      <TouchableOpacity
         style={styles.test}
         onPress={() => navigation.navigate('Home')}>
           <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>Back to Login Page</Text>
         </TouchableOpacity>
      <StatusBar style={{ backgroundColor: '#000'}} />
    </View>
  );
}
     
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems:'center',
    justifyContent: 'flex-start',
  },
  test: {
    width: 180,
    height: 25,
    backgroundColor: '#1cdcf6',
    marginTop: 500,
    marginBottom: 0,
    borderRadius: 10,
  },

});
