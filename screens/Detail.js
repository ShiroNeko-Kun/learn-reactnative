import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Detail({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff'}}>ini halaman detail </Text>
      <Button
        title="Back"
        onPress={() => navigation.navigate('Home')}
      />
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
});
