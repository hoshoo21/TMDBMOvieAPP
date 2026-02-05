import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import GenreMovies from '../screens/GenreMovies';
import MoviePage from '../screens/MoviePage';
import DetailPage from '../screens/DetailPage';
import ActorDetails from '../screens/ActorDetails';
import CustomBackButton from '../screens/Components/CustomBackButton';
import colors from '../styles/colors';
const Stack = createNativeStackNavigator();

const SearchStack =()=> {
    return (
      <Stack.Navigator 
      screenOptions ={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.text,
        headerLeft: () => <CustomBackButton />, 
        tabBarStyle: { backgroundColor: colors.secondary },// This replaces the default arrow
        headerTitleAlign: 'left',
      }}

        >
        <Stack.Screen name ="SearchScreen" component={MoviePage} options ={{headerShown:false}} />
        <Stack.Screen name="DetailPage" component={DetailPage}  />
        <Stack.Screen name = "GenreMovies"  component={GenreMovies} />
        <Stack.Screen name = "ActorDetails" component={ActorDetails} />
      </Stack.Navigator>
    );  
  

  
  }
  export default SearchStack;