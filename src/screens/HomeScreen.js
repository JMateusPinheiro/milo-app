import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import List from '../components/List';
import ValueFilterForm from '../components/ValueFilterForm';
import combineReducers from '../reducers'

const store = createStore(combineReducers)

export default class HomeScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      datas:[],
      page: 0,
      datasRender: [],
      loading:false,
    }
  }

componentDidMount() {
  console.log('Start load datas')
  fetch('http://portal.greenmilesoftware.com/get_resources_since?fbclid=IwAR0BNzc3LD-Sr_UGrSwCJYO43OaIUyRSSH3eLE46uY0MaQTvV1UuK90ZbCQ')
  .then(response =>{
    response.json().then(data => {
      this.setState({
        datas: data
      })
      console.log('Finish load datas')
    });
  })
  .catch(function(err){
    console.error('Failed retrieving resources', err);
  });  
}
  render() {
    return (
      <Provider store={store}>
        <View>
          <View>
            <ValueFilterForm/>
          </View>
          <View>
            <List 
              state={this.state}/>
          </View>
        </View>
      </Provider>
    );
  }
}