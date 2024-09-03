import { useRouter } from 'expo-router';
import { Text, View, StyleSheet, Button, ImageBackground, TouchableOpacity } from 'react-native';

export default function Home() {
  const router = useRouter();
  return (
    <ImageBackground source={require('../assets/images/bg.png')} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.text}>this is to welcome you for the party which will be held on further notice</Text>
        <Button
          title="Get started"
          onPress={() => router.push('./Authentication/details')}
                />
          <TouchableOpacity
  onPress={() => router.push('./Authentication/Authscreen')}
  style={styles.button}
>
  <Text style={styles.buttonText}>Get an Account</Text>
</TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#f4511e',
    borderRadius: 20,    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});