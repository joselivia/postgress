import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Details() {
  const router = useRouter();
 
  return (
    <View style={styles.container}>
    
      <Text
        onPress={() => {
          router.setParams({ name: 'Updated' });
        }}>
        Update the title coem hereuhdvhvkhfl fejhkshkjs
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});