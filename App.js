import React, { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Text, View } from 'react-native';

export default function App() {
  useEffect(() => {
    const openWebsite = async () => {
      await WebBrowser.openBrowserAsync('https://hey-stop.com/');
    };

    openWebsite();
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Loading...</Text>
    </View>
  );
}
