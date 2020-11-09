import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

// Libaries
import {w, h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';

// Custom Components
import {Navbar2} from '../component';

export class Screenthree extends Component {
  render() {
    return (
      <View style={styles.Conatiner}>
        <Text>SCREEN 3</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Conatiner: {
    flex: 1,
    flexDirection: 'row',
  },
});
