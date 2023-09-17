import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Game from '../screens/Game'

const Public = createNativeStackNavigator()

export const PublicStack = (): JSX.Element => (
  <Public.Navigator
    initialRouteName={'Game'}
    screenOptions={{
      statusBarStyle: 'light',
      headerShown: false,
      headerTitle: '',
      contentStyle: { backgroundColor: '#276e84' },
    }}
  >
    <Public.Screen name={'Game'} component={Game} />
  </Public.Navigator>
)
