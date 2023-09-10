import React from "react";
import UpcomingWeather from "../screens/UpcomingWeather"
import CurrentWeather from "../screens/currentWeather";
import City from "../screens/city";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Feather} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'tomato', tabBarInactiveColor: 'grey' }}>
            <Tab.Screen name={"Current"} component={CurrentWeather} options={{
                tabBarIcon: ({ focused }) => <Feather name="droplet" size={25} color={focused ? 'tomato' : 'black'} />
            }} />
            <Tab.Screen name={"Upcoming"} component={UpcomingWeather} options={{
                tabBarIcon: ({ focused }) => <Feather name="clock" size={25} color={focused ? 'tomato' : 'black'} />
            }} />
            <Tab.Screen name={"City"} component={City} options={{
                tabBarIcon: ({ focused }) => <Feather name="home" size={25} color={focused ? 'tomato' : 'black'} />
            }} />
        </Tab.Navigator>
    );
}
export default Tabs;