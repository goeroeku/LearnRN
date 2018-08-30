import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default class TextIC extends React.Component{
    render(){
        return (
            <Text style={styles.judul}>Login</Text>
        );
    }
}

const styles = {
    judul: {
      color: '#7D1313',
      fontSize: 50,
      fontWeight: 'bold'
    }
  }