
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react'; 
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useRoute } from './router';


export default function App() {
 
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return null;
  } else {
    SplashScreen.hideAsync();
  }
 
  const routing = useRoute(null);

  return (
  <NavigationContainer>
      
      {routing}
      <StatusBar style="auto" backgroundColor={'transparent'} />
  </NavigationContainer>
    
  )
}





