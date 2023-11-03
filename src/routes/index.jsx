import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { Clima } from '../screens/Clima';
import { Regar } from '../screens/Regar';

const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                tabBarActiveTintColor: '#005C73',
                headerShown: false,
                tabBarHideOnKeyboard: true,
            }}>
                <Screen
                    name='home'
                    component={Home}
                    options={{
                        tabBarIcon: ({size, color}) => <Ionicons name='home' size={size} color={color} />
                    }}
                />
                <Screen
                    name='clima'
                    component={Clima}
                    options={{
                        tabBarIcon: ({size, color}) => <FontAwesome5 name="cloud-sun" size={size} color={color} />
                    }}
                />
                <Screen
                    name='regar'
                    component={Regar}
                    options={{
                        tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="watering-can" size={size} color={color} />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}