import React from 'react';
import { TextInput, StyleSheet} from 'react-native';

const Input = props =>(
    <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        value={props.value}        
    />
);

const styles =  StyleSheet.create({
    input:{
        borderWidth: 1,
    }
})

export default Input