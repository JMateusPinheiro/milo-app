import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ListItem = ({data}) => {
    return (
        <View style={styles.listItem}>
            <Text>ID: {data.resource.resource_id}</Text>
            <Text>Updated at: {data.resource.updated_at}</Text>
            <Text>Value: {data.resource.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#aaa',
        marginTop: 20,
        padding: 30,
    },
})


export default ListItem;