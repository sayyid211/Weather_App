import React from "react";
import { 
    SafeAreaView, 
    Text, 
    StyleSheet, 
    FlatList, 
    StatusBar, 
    ImageBackground,
 } from "react-native";
 import ListItem from "../components/listItem";

const DATA = [
    {
        dt: "2023-08-27",
        main: {
	            temp_max: 30,
	            temp_min: 25,
	        },
        weather: [
	            {
		            main: 'clear'
            }
        ]
    },
    {
        dt: "2023-08-29",
        main: {
	            temp_max: 30,
	            temp_min: 27,
	        },
        weather: [
	            {
		            main: 'Cloudy'
            }
        ]

    },
    {
        dt: "2023-08-30",
        main: {
	            temp_max: 31,
	            temp_min: 26,
	        },
        weather: [
	            {
		            main: 'clear'
            }
        ]

    },
]

const UpcomingWeather = () => {
    const renderItem = ({item}) => (
        <ListItem condition={item.weather[0].main}
         dt={item.dt} 
         min={item.main.temp_min}
          max={item.main.temp_max} />
    )
    const {container, title, Image } = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/upcoming_background.jpg')} style={Image}>
                <Text style={title}>Upcoming Weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt}
                />
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: 0,
            backgroundColor: 'aliceblue'
        },
        title: {
            color: 'white',
            textAlign: 'center',
            fontSize: 25,
            
        },
        
        Image: {
            flex: 1,
        },
    }
)

export default UpcomingWeather;