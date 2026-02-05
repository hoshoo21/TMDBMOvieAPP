import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconHome} from '../assets/icons/IconHome';
import { commonStyles } from '../styles/commonStyles';
import colors from '../styles/colors';
import { Ionicons } from '@expo/vector-icons'; // Standard Expo Icons
import HomePage from '../screens/HomePage';
import MoviePage from '../screens/MoviePage';
import MovieStack from './MovieStack';
import SearchStack from './SearchStack';



const Tab = createBottomTabNavigator();

function MainTabNavigation(){
    return (
        <Tab.Navigator  screenOptions={{
                tabBarShowLabel:false,
                tabBarActiveTintColor:colors.primary
                }}>
            <Tab.Screen name={'HomePage'} component={MovieStack} 
                options={{
                
                headerShown:false,
                tabBarIcon: ({focused}) => {
                    return focused ? (
                    <IconHome fill={colors.primary} />
                    ) : (
                            <IconHome fill={colors.grey3} />
                            );
                    },
              }}/>
            <Tab.Screen name= {'search'} component={SearchStack} 
                
                options={{
                    headerShown:false,
                    tabBarIcon: ({focused}) => {
                        return focused ? (
                        <Ionicons name="search" size={30} color={colors.green} />
                        ) : (
                                <Ionicons name="search" size={30} color={colors.grey3} />
                                );
                        },
                    }}/>
                    
               <Tab.Screen name= {'Settings'} component={MoviePage} 
                options={{
                    headerShown:false,
                    tabBarIcon: ({focused}) => {
                        return focused ? (
                        <Ionicons name="settings" size={30} color={colors.red} />
                        ) : (
                                <Ionicons name="settings" size={30} color={colors.grey3} />
                                );
                        },
                    }}/>
               
                
        </Tab.Navigator>
    )
}

export default MainTabNavigation;