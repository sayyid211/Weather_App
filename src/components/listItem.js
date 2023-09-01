import React from "react";
import {View, StyleSheet, FlatList, Text} from "react-native";
import {Feather} from "@expo/vector-icons";

const ListItem = (props) => {
    const {dt, max, min, condition} = props
    const {Item, date, temp} = styles;
    return (
        <View style={styles.Item}>
            <Feather name="sun" size={50} color={"white"}/>
            <Text style={date}>{dt}</Text>
            <Text style={temp}>{max}</Text>
            <Text style={temp}>{min}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    Item: {
        padding: 20,
        marginHorizontal: 16,
        marginVertical: 8,
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: 'lightsteelblue',
    },
    temp: {
        color: 'white',
        fontSize: 20,
    },
    date: {
        color: 'white',
        fontSize: 15,
    },
        
});

export default ListItem;