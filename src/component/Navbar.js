import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {w, h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';
export class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* right */}
        <TouchableOpacity onPress={this.props.press} style={styles.right}>
          <Icon name={'menu'} type="ionicon" size={55} color="#fff" />
        </TouchableOpacity>
        {/* middle */}
        <TouchableOpacity style={styles.middle}>
          <Icon name={'search'} type="ionicon" size={55} color="#fff" />
        </TouchableOpacity>
        {/* left */}
        <View style={styles.left}></View>
        {/* end */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    width: '100%',
    height: h('8%'),
    flexDirection: 'row',
  },
  right: {
    // backgroundColor: 'red',
    width: '10%',
    height: '100%',

    justifyContent: 'center',
  },
  left: {
    // backgroundColor: 'green',
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    // backgroundColor: 'gold',
    width: '10%',
    height: '100%',

    justifyContent: 'center',
  },
  midtxt: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: h('2.8%'),
  },
});
