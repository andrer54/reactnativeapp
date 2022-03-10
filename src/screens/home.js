import * as React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import imagem1 from '../assets/photo-1461468611824-46457c0e11fd.jpeg'


function HomeScreen({navigation}) {
    const styles = StyleSheet.create({
        tinyLogo: {
            width: 300,
            height: 300,
          },
    })
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        
        <Image
          style={styles.tinyLogo}
          source={imagem1}
        />

<Button title='Ir para About' onPress={() => navigation.navigate('About')} />
    </View>
    );
}

export default HomeScreen;