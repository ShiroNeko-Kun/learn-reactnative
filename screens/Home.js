import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Ini Halaman Home</Text>
      <Button
        title="Menuju Halaman Detail"
        onPress={() => navigation.navigate('Detail', {
          level: 'Hard',
          name: 'Ini Halaman Detail'
        })}
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
    justifyContent: 'center',
  },
});
