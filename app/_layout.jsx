import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SplashScreen,Stack } from 'expo-router'
import { useFonts } from 'expo-font'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontLoaded,error] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold':require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold':require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight':require('../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light':require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium':require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular':require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold':require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin':require('../assets/fonts/Poppins-Thin.ttf'),
    'SpaceMono-Regular':require('../assets/fonts/SpaceMono-Regular.ttf'),
  })
  useEffect(()=>{
    if(error) throw error;

    if(fontLoaded) SplashScreen.hideAsync();
  },[fontLoaded,error])

  if(!fontLoaded && !error) return null;
  return (
    <Stack>
      <Stack.Screen name='index' options={{headerShown:false}} />
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})