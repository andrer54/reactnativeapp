import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/home';
import AboutScreen from './src/screens/about';
import LoginScreen from './src/screens/Login';

const Tab = createBottomTabNavigator();

function App() {
    return (
    <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='About' component={AboutScreen} />
        <Tab.Screen name='Login' component={LoginScreen} />
        </Tab.Navigator>
    </NavigationContainer>
    );
}

export default App;