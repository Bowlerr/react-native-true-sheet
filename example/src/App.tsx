import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { MapScreen, NavigationScreen, ChildScreen, SheetModalScreen } from './screens'
import type { AppStackParamList } from './types'

const Stack = createNativeStackNavigator<AppStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTransparent: true, headerTintColor: 'white' }}
        initialRouteName="Map"
      >
        <Stack.Screen options={{ headerShown: false }} name="Map" component={MapScreen} />
        <Stack.Screen
          options={{ headerShown: false, title: 'Home' }}
          name="Navigation"
          component={NavigationScreen}
        />
        <Stack.Screen name="Child" component={ChildScreen} />
        <Stack.Screen
          name="SheetModal"
          component={SheetModalScreen}
          options={{
            presentation: 'transparentModal',
            headerShown: false,
            animationDuration: 0,
            animation: 'none',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
