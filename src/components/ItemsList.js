import React from 'react'
import { View, StyleSheet } from 'react-native'

const ItemsList = props => {
    const { datas } = props
    const items = peoples.map(resource => {
        return (
            <Text>resource.created_at</Text>
        );
    })
    return (
        <View style={styles.container}>
            {items}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000',
    },
    card:{
        backgroundColor: '#444',
        height: 60,
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row"
    },
    cardText:{
        color: 'orange'
    }
})


export default ItemsList;