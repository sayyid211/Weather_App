import React from "react";
import {View, StyleSheet, SafeAreaView, Text} from 'react-native';
import UpcomingWeather from "./src/screens/UpcomingWeather";
import CurrentWeather from "./src/screens/currentWeather";
import City from "./src/screens/city";
const App = () => {
  return (
    <View style={styles.container}>
      <City/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default App;