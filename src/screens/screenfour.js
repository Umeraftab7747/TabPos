import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

// Libaries
import {w, h} from 'react-native-responsiveness';
import {Icon} from 'react-native-elements';

// Custom Components
import {Navbar2} from '../component';

export class screenfour extends Component {
  render() {
    return (
      <View style={styles.Conatiner}>
        <Navbar2
          text={'Inventory'}
          press={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <View style={styles.TopContainerView}>
          <TextInput
            style={styles.TextInputStyle}
            underlineColorAndroid={'#0005'}
            placeholder={'Ingredient Name'}
          />
          <TextInput
            style={styles.TextInputStyle}
            underlineColorAndroid={'#0005'}
            placeholder={'Amount in Stock'}
          />
          <TouchableOpacity style={styles.ButtonPress}>
            <Text style={styles.BtnAddText}>ADD</Text>
          </TouchableOpacity>
        </View>

        {/* headerBottom */}
        <View style={styles.BottomContainer}>
          <View style={styles.BottomContainers}>
            <Text style={[styles.BtomTabText, {color: 'tomato'}]}>ITEMS</Text>
          </View>
          <View style={styles.BottomContainers}>
            <Text style={[styles.BtomTabText, {color: 'green'}]}>
              All Beging
            </Text>
          </View>
          <View style={styles.BottomContainers}>
            <Text style={[styles.BtomTabText, {color: 'dodgerblue'}]}>
              Add Today
            </Text>
          </View>
          <View style={styles.BottomContainers}>
            <Text style={[styles.BtomTabText, {color: 'orange'}]}>
              Deducted Today
            </Text>
          </View>
          <View style={styles.BottomContainers}>
            <Text style={[styles.BtomTabText, {color: '#a8dda8'}]}>
              Current
            </Text>
          </View>
        </View>
        {/* headerBottom */}

        {/* Item Enterend */}
        <View style={[styles.BottomContainer, {marginTop: h('1%')}]}>
          <View style={styles.BottomContainers}>
            <Text style={[styles.BtomTabText, {color: 'black'}]}>
              Chicken 5kg
            </Text>
          </View>
          <View style={styles.BottomContainers}>
            <Text style={[styles.BtomTabText, {color: 'green'}]}>1635</Text>
          </View>
          <View style={styles.BottomContainers}>
            <Text style={[styles.BtomTabText, {color: 'dodgerblue'}]}>0</Text>
          </View>
          <View style={styles.BottomContainers}>
            <Text style={[styles.BtomTabText, {color: 'orange'}]}>0</Text>
          </View>
          <View style={styles.BottomContainers}>
            <Text style={[styles.BtomTabText, {color: '#a8dda8'}]}>1653</Text>
          </View>
        </View>
        {/* item 2 */}
        <View style={[styles.BottomContainer, {marginTop: h('1%')}]}>
          <View style={styles.BottomContainers}>
            <Text style={[styles.BtomTabText, {color: 'black'}]}>
              Vegetable 2kg
            </Text>
          </View>
          <View style={styles.BottomContainers}>
            <Text style={[styles.BtomTabText, {color: 'green'}]}>5231</Text>
          </View>
          <View style={styles.BottomContainers}>
            <Text style={[styles.BtomTabText, {color: 'dodgerblue'}]}>2</Text>
          </View>
          <View style={styles.BottomContainers}>
            <Text style={[styles.BtomTabText, {color: 'orange'}]}>0</Text>
          </View>
          <View style={styles.BottomContainers}>
            <Text style={[styles.BtomTabText, {color: '#a8dda8'}]}>6253</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Conatiner: {
    flex: 1,
    alignItems: 'center',
  },
  TopContainerView: {
    // backgroundColor: 'red',
    width: '50%',
    height: h('10%'),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  TextInputStyle: {
    // backgroundColor: 'red',
    width: '30%',
    height: h('7%'),
    paddingLeft: h('2%'),
  },
  ButtonPress: {
    backgroundColor: '#a8dda8',
    width: '30%',
    height: h('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('1%'),
  },
  BtnAddText: {
    color: 'white',
    fontSize: h('2.2%'),
    fontWeight: 'bold',
  },
  BottomContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: h('7%'),

    alignItems: 'center',
    borderRadius: h('1%'),
    flexDirection: 'row',
  },
  BottomContainers: {
    // backgroundColor: 'red',
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: h('4%'),
  },
  BtomTabText: {
    color: 'black',
    fontSize: h('2.4%'),
    fontWeight: '300',
  },
});
