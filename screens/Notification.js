import { StatusBar } from 'expo-status-bar'
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native'
import { Drawer } from '@react-navigation/drawer'

export default function Notification ({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: '17', color: '#1cdcf6'}}>ini halaman Notification</Text>
       <TouchableOpacity
         style={styles.test}
         onPress={() => navigation.navigate('Home')}>
           <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>Back to Login Page</Text>
         </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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