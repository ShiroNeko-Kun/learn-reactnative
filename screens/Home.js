import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import { StyleSheet, Text, View, Button, Alert, Image, TextInput, } from 'react-native';
import { Input } from 'react-native-elements'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={{width: 150, height: 150, fontWeight:'900' }} source={require('../assets/myreact-icon.png')} />
      <Text style={{ fontSize: 20, fontFamily: 'sans-serif-medium', textAlign: 'center', color: '#fff'}}>Username</Text>
      <Input style={styles.texter} 
      placeholder={'Username'}
      placeholderTextColor={'#c7bebe'} 
      autoCapitalize={false} />
      <Text> </Text>
      <Text style={{ fontSize: 20, fontFamily: 'sans-serif-medium', textAlign: 'center', color: '#fff'}}>Password</Text>
      <Input style={styles.texter} 
      placeholder={'Password'}
      placeholderTextColor={'#c7bebe'} 
      autoCapitalize={false} />
    
      <Button  
        title="LOGIN"
        onPress={() => navigation.navigate('Detail')}
      />
      <StatusBar style={{ backgroundColor: '#000' }} />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  texter: {
    width: '100',
    height: 44,
    backgroundColor: '#726e6e',
    borderRadius: 6,
    paddingHorizontal: 8,
  },

});
