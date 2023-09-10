import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, View } from "react-native";
import IconText from "../components/IconText";

const City = () => {
    const {citybg, container, city_name, country, city_text, population_wrapper, population_text, risesetwrapper, risesettext, rowLayout } = styles;
    return (
                <SafeAreaView style={container}>
                    <ImageBackground style={citybg} source={require('../../assets/city_background.jpg')}>
                    <Text style={[city_name, city_text]}>Chicago, Illinois</Text>
                    <Text style={[country, city_text]}>USA</Text>
                    <View style={[population_wrapper, rowLayout]}>
                        <IconText iconName={'user'} iconColor={'red'} bodyText={'150000'} bodyTextStyles={population_text} />
                    </View>
                    <View style={[risesetwrapper, rowLayout]}>
                        <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'06:12'} bodyTextStyles={risesettext} />
                        <IconText iconName={'sunset'} iconColor={'white'} bodyText={'18:42'} bodyTextStyles={risesettext} />
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
            marginTop: 30,
            justifyContent: 'center',
        },
        population_text: {
            marginLeft: 7.5,
            fontSize: 25,
            color: 'white',
        },
        risesettext: {
            fontSize: 20,
            color: "white",
        },
        risesetwrapper: {
            alignItems: "center",
            marginTop: 30,
            justifyContent: "space-around",
        },
        rowLayout: {
            flexDirection: "row",
            alignItems: "center",
        },
    }
)
export default City;