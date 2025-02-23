import Home from './components/home';
import Gameboard from './components/gameboard';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Tab.Navigator
            sceneContainerStyle={{ backgroundColor: 'transparent' }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused
                  ? 'information'
                  : 'information-outline';
              } else if (route.name === 'Gameboard') {
                iconName = focused 
                ? 'dice-multiple' 
                : 'dice-multiple-outline';
              }
            else if (route.name === 'Scoreboard') {
                    iconName = focused 
                    ? 'view-list' 
                    : 'view-list-outline';
            }
              
              return <MaterialCommunityIcons
                name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'steelblue',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Gameboard" component={Gameboard} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }