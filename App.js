import * as React from 'react';
import 'react-native-gesture-handler';
// import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './routes/routes';
// import * as Font from 'expo-font';
export default class App extends React.Component {
  componentDidMount() {
    // Font.loadAsync({
    //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    //   'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
    //   'open-sans-reg': require('./assets/fonts/OpenSans-Regular.ttf'),
    //   'roboto': require('./assets/fonts/Roboto-Bold.ttf'),
    // });
  }
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>'
      <
      AppNavigator / >
    );
  }
}