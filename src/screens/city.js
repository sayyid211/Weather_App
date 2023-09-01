import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, View } from "react-native";
import { Feather } from '@expo/vector-icons';

const City = () => {
    const {citybg, container, city_name, country, city_text, population_wrapper, population_text, risesetwrapper, risesettext, } = styles;
    return (
                <SafeAreaView style={container}>
                    <ImageBackground style={citybg} source={require('../../assets/city_background.jpg')}>
                    <Text style={[city_name, city_text]}>Chicago, Illinois</Text>
                    <Text style={[country, city_text]}>USA</Text>
                    <View style = {population_wrapper}>
                        <Feather name="user" size={50} color={'white'}/>
                        <Text style={population_text}>15000</Text>
                    </View>
                    <View style={risesetwrapper}>
                        <Feather name="sunrise" size={50} color="white"/>
                        <Text style={risesettext}>06:22</Text>
                        <Feather name="sunset" size={50} color="white"/>
                        <Text style={risesettext}>18:45</Text>
                    </View>
                    </ImageBackground>
                </SafeAreaView>
    )
}

const styles = StyleSheet.create (
    {
        container: {
            flex: 1,
            marginTop: StatusBar.currentHeight ,
        },
        citybg: {
            flex: 1,
        },
        city_text: {
            alignSelf: "center",
            justifyContent: "center",
            fontWeight: 'bold',
            color: 'white',
        },
        city_name: {
            paddingTop: 20,
            fontSize: 40,
        },
        country: {
            fontSize: 30,
        },
        population_wrapper: {
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 30,
            justifyContent: 'center',
        },
        population_text: {
            marginLeft: 7.5,
            fontSize: 25,
            fontWeight: 'bold',
            color: 'white',
        },
        risesettext: {
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
        },
        risesetwrapper: {
            alignItems: "center",
            marginTop: 30,
            justifyContent: "space-around",
            flexDirection: "row",
        },
    }
)
export default City;