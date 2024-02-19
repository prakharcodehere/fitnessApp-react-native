import { Stack } from 'expo-router';
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Layout = () => {
    return (
      <Stack
      screenOptions={
        {
            headerShown: false
        }
      }
      
      >
        <Stack.Screen name="exercises" options={{
          presentation: 'fullScreenModal'
        }}
        />
        <Stack.Screen name="exerciseDetails" options={{
          presentation: 'modal'
        }}
        />

        </Stack>
    );
}



export default Layout;
