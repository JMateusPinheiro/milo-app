import React from 'react'
import {View, ActivityIndicator, StyleSheet} from 'react-native'

const FlatListFooter = (props) => {
  //if (!props.loading) return null;

    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  };

  const styles = StyleSheet.create({
    loading: {
      alignSelf: 'center',
      marginVertical: 20,
    },
  });

  export default FlatListFooter;