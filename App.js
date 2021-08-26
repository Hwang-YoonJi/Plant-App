import React from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './navigations/Navigator'

const App = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  )
}

export default App;