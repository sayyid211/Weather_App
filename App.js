import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const CurrentWeather = () => {
  return (
    <SafeAreaView style = {styles.wrapper}>
      <View style={styles.container}>
      <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highlowWrapper}>
          <Text style={styles.highlow}>High: 8 </Text>
          <Text style={styles.highlow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodywrapper}>
          <Text style={styles.description}>It's Sunny</Text>
          <Text style={styles.message}>It's Perfect T-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  message: {
    fontSize: 30,
  },
  description:{
    fontSize: 48,
  },
  bodywrapper:{
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,

  },
  highlowWrapper: {
    flexDirection: 'row',
    
  },
  wrapper: {
    
    backgroundColor: 'lightblue',
    flex: 1
  },
  container: {
    marginTop: 20,
    paddingTop: 40,
    flex: 1,
    alignItems: 'center',
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  highlow: {
    color: 'black',
    fontSize: 20,
  },
  feels: {
    color: 'black',
    fontSize: 30,
  }
  
})
export default CurrentWeather;