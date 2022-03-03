import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Detail({ navigation, route }) {
  const { level, name } = route.params
  return (
    <View style={styles.container}>
      <Text>Ini Halaman Detail untuk level {level} </Text>
      <Button
        title="Back"
        onPress={() => navigation.navigate('Home')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'flex-start',
  },
});
