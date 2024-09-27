import { Stack } from "expo-router";
import {useFonts} from 'expo-font'

export default function RootLayout() {

  useFonts({
    'Outfit':require('../assets/fonts/Outfit-Regular.ttf'),
    'Outfit-bold':require('../assets/fonts/Outfit-Bold.ttf'),
    'Outfit-Medium':require('../assets/fonts/Outfit-Medium.ttf')

  })

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="login/index"
      options={
        {
          headerShown:false
        }
      }
      />
    </Stack>
  );
}
