import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';

import Favourite from '../screens/Favourite';
import Profile from '../screens/Profile';
import { Image } from 'react-native';

const BottomTabNavigator = () => {

    const Tab = createBottomTabNavigator();

    const screenOptions = ({route}) => ({
        //탭 화면 ui 정의
        tabBarIcon: ({focused}) => {
            return (
              <>
                {route.name === 'Home' ? (
                    focused ? (
                        <Image 
                          source={require('../images/home.png')}
                          style={{height: 20, width: 20}}
                        />
                    ) : (
                        <Image 
                          source={require('../images/home.png')}
                          style={{height: 20, width: 20}}
                        />
                    )
                ) : route.name === 'Favourite' ? (
                    focused ? (
                        <Image 
                          source={require('../images/favourite.png')}
                          style={{height: 20, width: 20}}
                        />
                    ) : (
                        <Image 
                          source={require('../images/favourite.png')}
                          style={{height: 20, width: 20}}
                        />
                    )
                ) : focused ? (
                    <Image 
                      source={require('../images/profile.png')}
                      style={{height: 20, width: 20}}
                    />
                ) : (
                    <Image 
                      source={require('../images/profile.png')}
                      style={{height: 20, width: 20}}
                    />
                )}
               </>
            );
        },
    });
    return (
        <Tab.Navigator 
            screenOptions={screenOptions}
            tabBarOptions={{activeTintColor: '#40A4FF', inactiveTintColor: 'gray'}}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Favourite" component={Favourite} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
