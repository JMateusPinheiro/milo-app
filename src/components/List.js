import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { connect } from 'react-redux'

import ListItem from './ListItem'
import FlatListFooter from './FlatListFooter'
import { setDatas, setLoading, setPageDatas, imcrementPage } from '../actions'

class List extends React.Component {
    load(){
        this.props.dispatchPageDatas(this.props.datas.slice(this.props.page, this.props.page + 10));
    }
    componentDidMount() {
        this.props.dispatchLoading(true)
        console.log('Start load datas')
        fetch('http://portal.greenmilesoftware.com/get_resources_since?fbclid=IwAR0BNzc3LD-Sr_UGrSwCJYO43OaIUyRSSH3eLE46uY0MaQTvV1UuK90ZbCQ')
        .then(response =>{
          response.json().then(data => {
            this.props.dispatchDatas(data)
            this.props.dispatchPageDatas(data.slice(this.props.page, this.props.page + 10));
            this.props.dispatchPage(10)
            this.props.dispatchLoading(false)
            console.log('Finish load datas')
          });
        })
        .catch(function(err){
          console.error('Failed retrieving resources', err);
        });  
    }
    render(){
        return (
            <FlatList 
                data={this.props.pageDatas}
                renderItem={({item}) => (<ListItem data={item}/>)}
                keyExtractor={item => this.props.pageDatas.indexOf(item).toString()}
                ListFooterComponent={<FlatListFooter loading={this.props.loading}/>}
                onEndReached={console.log('final')/*this.load()*/}
                onEndReachedThreshold={0.1} 
            />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 20,
    }
});

const mapDispatchToProps = dispatch =>{
    return {
      dispatchDatas: datas => dispatch(setDatas(datas)),
      dispatchLoading: loading => dispatch(setLoading(loading)),
      dispatchPageDatas: pageDatas => dispatch(setPageDatas(pageDatas)),
      dispatchPage: imcrement => dispatch(imcrementPage(imcrement))
    }
}

const mapStateToProps = state =>{
    const {datas, page, loading, pageDatas} = state
    return {datas, page, loading, pageDatas};
}

export default connect(mapStateToProps, mapDispatchToProps)(List);