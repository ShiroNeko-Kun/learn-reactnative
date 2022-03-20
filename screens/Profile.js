import { StatusBar } from 'expo-status-bar'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { Drawer } from '@react-navigation/drawer'

export default function Profile ({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Ini Halaman Profile</Text>
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
});