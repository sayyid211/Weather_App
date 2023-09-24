import React, {useState, useEffect} from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Tabs from "./src/components/Tabs"
import { NavigationContainer } from "@react-navigation/native";
import { useGetWeather } from "./src/hooks/useGetWeather";

const App = () => {
  const [loading, error, weather] = useGetWeather()
  console.log(loading, error, weather)
  
  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs Weather={weather} />
      </NavigationContainer>
    )
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator  size={'large'} color={'blue'}/>
    </View>
  )
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})
export default App;