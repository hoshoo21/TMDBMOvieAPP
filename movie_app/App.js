import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MediaProvider } from './context/mediaContext';
import MoviePage from './screens/MoviePage';
import DetailPage from './screens/DetailPage'
import ActorDetails from './screens/ActorDetails';


const Stack = createNativeStackNavigator();

const MovieStack =()=> {
  return (
    <Stack.Navigator initialRouteName="MoviePage">
      <Stack.Screen name="MoviePage" component={MoviePage} />
      <Stack.Screen name="DetailPage" component={DetailPage} />
      <Stack.Screen name = "ActorDetails" component={ActorDetails} />
    </Stack.Navigator>
  );


}
export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
        <MediaProvider>
          <NavigationContainer>
            <MovieStack />
        </NavigationContainer>
      
        </MediaProvider>
      
    </GestureHandlerRootView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#F5F7FA',
  },
});
