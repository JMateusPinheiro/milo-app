import React from 'react';
import { View } from 'react-native';
import axios from 'axios'

import Header from '../components/Header';

export default class HomeScreen extends React.Component {
  
  constructor(props){
    super(props);

    this.state={
      datas: []
    }
  }
  
  componentDidMount(){
    axios
      .get('http://portal.greenmilesoftware.com/get_resources_since')
      .then(response => {
        const resource = response.data;
        this.setState({
          datas: resource
        })
      });
  }

  render() {
    return (
      <View>
        <Header datas={this.state.datas}/>
      </View>
    );
}
}