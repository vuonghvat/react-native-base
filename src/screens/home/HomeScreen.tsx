import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native"
const HomeScreen = () => {
    return <>
        <View style={styles.container}></View>
    </>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue"
    }
})
export default HomeScreen;