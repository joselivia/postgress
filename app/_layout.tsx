import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
    initialRouteName='index'
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
         <Stack.Screen 
         
        name="index" 
        options={{ 
          title: 'My Home',
          headerTitleAlign: 'center',
        }} 
      />
    
      <Stack.Screen 
        name="Authentication/details" 
        options={{ 
          title: 'Details', 
          headerTitleAlign: 'center',
        }} 
      />
      <Stack.Screen 
        name="Authentication/Authscreen" 
        options={{ 
          title: 'Authentication', 
          headerTitleAlign: 'center',
        }} 
      />
    </Stack>
  );
}