import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MediaProvider } from './context/mediaContext';
import MainTabNavigation from './navigation/MainTabNavigation';
import colors from './styles/colors';
import MovieStack from './navigation/MovieStack';
import LearningPage from './screens/LearningPage';



export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
       <GestureHandlerRootView style={styles.container}>
        <MediaProvider>
          <NavigationContainer>
            <MainTabNavigation />
          </NavigationContainer>
         
        </MediaProvider>
      
    </GestureHandlerRootView>
   </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
