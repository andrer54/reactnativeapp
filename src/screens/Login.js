import * as React from 'react';
import { View, Text, Button } from 'react-native';

function LoginScreen({navigation}) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button title='Ir para About' onPress={() => navigation.navigate('About')} />
        <Button title='Ir para Home' onPress={() => navigation.navigate('Home')} />
    </View>
    );
}

export default LoginScreen;


/*
import * as React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TextInput } from "react-native"

export function LoginScreen({navigation}){
    
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
*/