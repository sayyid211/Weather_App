import React from "react";
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from "../components/RowText";
import { WeatherType } from "../utilities/WeatherType";

const CurrentWeather = () => {
  const {wrapper, container, temp, feels, bodywrapper, description, message, highlowWrapper, highlow, } = styles;
  return (
    <SafeAreaView style = {wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText messageOne={"High: 25"} messageTwo={"Low: 21"} containerStyles={highlowWrapper} messageOneStyles={highlow} messageTwoStyles={highlow} />
      </View>
      <View>
      <RowText 
      messageOne={"It's Sunny"}
      messageTwo={WeatherType['Thunderstorm'].message} 
      containerStyles={bodywrapper} 
      messageOneStyles={description} 
      messageTwoStyles={message} />
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