import React from 'react'
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native'

const SafeScreen = ({ children,style }) =>(
    <SafeAreaView style={[styles.container, style]}>
        <View style={[styles.view, style]}>
            {children}
        </View>
    </SafeAreaView>
)

export default SafeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    view:{
        flex:1
    }
})

//paddingTop:StatusBar.currentHeight,