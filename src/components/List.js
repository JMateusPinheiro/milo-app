import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import { connect } from 'react-redux'

import ListItem from './ListItem'
import FlatListFooter from './FlatListFooter'

const List = (props) => {
    const {state} = props
    const pages = [...state.datasRender, ...state.datas.slice(state.page, state.page + 10)]
    
    // onEndReached(){
    //     this.props.
    // }
    isLoading(){

    }

    return (
        <FlatList 
            data={pages}
            renderItem={({item}) => (<ListItem data={item}/>)}
            keyExtractor={item => pages.indexOf(item).toString()}
            onEndReached={console.log('Final')}
            onEndReachedThreshold={0.1}
            ListFooterComponent={<FlatListFooter loading={isLoading}/>}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 20,
    }
});

const mapDispatchToProps = dispatch => {

}
const mapStateToProps = state =>{
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);