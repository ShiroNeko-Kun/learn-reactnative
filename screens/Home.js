import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler'
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, TextInput, } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}> 
      <Image style={{ width: 150, height: 150, fontWeight: '900', marginBottom: 20, marginTop: 15 }} source={require('../assets/myreact-icon.png')} />
      <Text> </Text>
      <Text style={{ fontSize: 17, textAlign: 'center', color: '#1cdcf6', fontWeight: 'bold' }}>USERNAME</Text>
      <TextInput style={styles.texter} 
      placeholder={'max. 30 character'}
      placeholderTextColor={'#c7bebe'}
      maxLength={30} 
      autoCapitalize={false} />
      <Text> </Text>
      <Text style={{ fontSize: 17, textAlign: 'center', color: '#1cdcf6', fontWeight: 'bold' }}>PASSWORD</Text>
      <TextInput style={styles.texter} 
      placeholder={'max. 17 character'}
      placeholderTextColor={'#c7bebe'} 
      maxLength={17}
      autoCapitalize={false} />
    
      <TouchableOpacity
         style={styles.test}
         onPress={() => navigation.navigate('Detail')}>
           <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: '#fff' }}>LOGIN</Text>
         </TouchableOpacity>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  texter: {
    fontSize: 15,
    width: 300,
    height: 35,
    backgroundColor: '#726e6e',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginTop: 3,
  },
  test: {
    width: 78,
    height: 25,
    backgroundColor: '#1cdcf6',
    marginTop: 60,
    marginBottom: 0,
    borderRadius: 10,
  },

});
