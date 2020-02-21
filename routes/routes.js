import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import HomeComponent from '../components/home'
import GetStartedComponent from '../components/getstarted/getstartedcomponent';
import { DetailsComponent } from '../components/details/detailscomponent';
const Stack = createStackNavigator();
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
          <Stack.Screen
          name="/details"
          component={DetailsComponent}
          options={{title: false}}
          />
          {/* <Stack.Screen
          name="/details"
          component={DetailsComponent}
          options={{title: false}}
          /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}