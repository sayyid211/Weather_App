import React, {useState, useEffect} from "react";
import {Text, View, Button, StyleSheet} from "react-native";
const Counter = () => {
    const {container, title} = styles;
    const [count, setCount] = useState(0);
    const [newCount, setnewCount] = useState(0);

    useEffect(() => {
        console.log(`Count changed`)
        return () => {
            console.log(`useEffect cleanup`)
        }
    }, [count]);
    return (
        <View style={container}>
            <Text style={title}>{`Count: ${count}`}</Text>
            <Button
                color = {'red'} 
                title={"Increase the count"}
                onPress={() => {
                    setCount(count + 1)
                }}
            />
            <Button
                color = {'green'} 
                title={"Decrease the count"}
                onPress={() => {
                    setCount(count - 1)
                }}
            />
            <Text style={title}>{`Count: ${newCount}`}</Text>
            <Button
                color = {'red'} 
                title={"Increase the count"}
                onPress={() => {
                    setnewCount(newCount + 1)
                }}
            />
            <Button
                color = {'green'} 
                title={"Decrease the count"}
                onPress={() => {
                    setnewCount(newCount - 1)
                }}
            />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    title: {
        fontSize: 25,
        marginTop: 25,
        alignSelf: 'center'
    }
})
export default Counter;