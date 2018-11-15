import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import List from '../components/List';
import ValueFilterForm from '../components/ValueFilterForm';
import combineReducers from '../reducers'

const store = createStore(combineReducers)

class HomeScreen extends Component {

  render() {
    return (
      <Provider store={store}>
        <View>
          <View>
            <ValueFilterForm/>
          </View>
          <View>
            <List/>
          </View>
        </View>
      </Provider>
    );
  }
}

export default HomeScreen