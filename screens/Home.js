import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={{width: 200, height: 200}} source={require('../assets/react-icon.png')} />
      <Text>Ini Halaman Home</Text>
      <Button
        title="Menuju Halaman Detail"
        onPress={() => navigation.navigate('Detail')}
      />
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

});
