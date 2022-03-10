import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, TextInput } from "react-native"

export function Login(){
    
    const styles = StyleSheet.create({
        meuInput:{
            width: 250,
            margin: 12,
            borderWidth: 1,
        }
    })
    
    
    return (
        <SafeAreaView>
            <Text>AQUI É A ÁREA DE LOGIN!</Text>
            <TextInput style={styles.meuInput}/>
            <TextInput style={styles.meuInput}/>            
        </SafeAreaView>
    )


}