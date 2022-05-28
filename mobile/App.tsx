import 'react-native-gesture-handler';

import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_500Medium 
} from '@expo-google-fonts/inter';

import Widget from './src/components/widget';
import theme from './src/theme';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium
  }) 

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
    <View 
      onLayout={onLayoutRootView}
      style={{
        flex: 1,
        backgroundColor: theme.colors.background
      }}  
    >
      <StatusBar 
        style="light" 
        backgroundColor="transparent"
        translucent  
      />
      <Widget />
      <Text>Hello</Text>
    </View>
    </ThemeProvider>
  );
}
