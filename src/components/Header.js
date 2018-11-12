import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Header = (props) => (
    <View style={style.container}>
        <Text>Milo App</Text>
    </View>
);

const style = StyleSheet.create({
    container:{
        marginTop: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo:{
        resizeMode: 'center',
    },
    title:{
        fontSize: 20
    }
});


export default Header;