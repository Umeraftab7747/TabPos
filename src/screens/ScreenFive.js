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

export class ScreenFive extends Component {
  render() {
    return (
      <View style={styles.Conatiner}>
        <Navbar2
          text={'Items'}
          press={() => {
            this.props.navigation.openDrawer();
          }}
        />

        {/* ADD category Name */}
        <View style={styles.TopContainerView}>
          <TextInput
            style={styles.TextInputStyle}
            underlineColorAndroid={'#0005'}
            placeholder={'Category Name'}
          />

          <TouchableOpacity style={styles.ButtonPress}>
            <Text style={styles.BtnAddText}>ADD Category</Text>
          </TouchableOpacity>
        </View>

        {/* Item List Container */}
        <View style={[styles.ItemContainer]}>
          <View style={[styles.itemNamebar]}>
            <Text style={[styles.MilkTeaText, {color: 'white'}]}>Milk Tea</Text>
            <TouchableOpacity>
              <Icon
                name={'add-circle-outline'}
                type="ionicon"
                size={45}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
          {/* Item list Headings */}
          <View style={[styles.itemNamebar, {backgroundColor: 'white'}]}>
            <Text style={styles.MilkTeaText}>Item</Text>
            <Text style={styles.MilkTeaText}> </Text>
            <Text style={styles.MilkTeaText}>Price</Text>
            <Text style={styles.MilkTeaText}>Cost</Text>
          </View>
          {/* items 1 added */}
          <View style={styles.ItemlistContainer}>
            <View style={styles.Itemone}>
              <Text style={styles.ItemText}>WHITE MOCHA</Text>
            </View>
            <View style={styles.Itemtwo}>
              <Text style={styles.ItemText}>1345</Text>
            </View>
            <View style={styles.Itemthree}>
              <Text style={styles.ItemText}>P0</Text>
            </View>
          </View>
          {/* items 1 added */}
          <View style={styles.ItemlistContainer}>
            <View style={styles.Itemone}>
              <Text style={styles.ItemText}>WHITE MOCHA2</Text>
            </View>
            <View style={styles.Itemtwo}>
              <Text style={styles.ItemText}>1345</Text>
            </View>
            <View style={styles.Itemthree}>
              <Text style={styles.ItemText}>P0</Text>
            </View>
          </View>
          {/* end */}
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
    width: '50%',
    height: h('7%'),
    paddingLeft: h('2%'),
  },
  ButtonPress: {
    backgroundColor: '#a8dda8',
    width: '40%',
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
  ItemContainer: {
    backgroundColor: 'white',
    width: '80%',
    height: h('70%'),
    elevation: h('6%'),
  },
  itemNamebar: {
    backgroundColor: '#28abb9',
    width: '100%',
    height: h('7%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: h('2%'),
    paddingRight: h('2%'),
  },
  MilkTeaText: {
    color: '#000',
    fontSize: h('3%'),
    fontWeight: 'bold',
  },
  ItemlistContainer: {
    // backgroundColor: '#e2e2e2',
    width: '100%',
    height: h('7%'),
    flexDirection: 'row',
    borderWidth: h('0.1%'),
    borderColor: '#0004',
  },
  Itemone: {
    // backgroundColor: 'orange',
    width: '55%',
    height: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: h('2%'),
  },
  Itemtwo: {
    // backgroundColor: 'gold',
    width: '25%',
    height: '100%',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: h('8%'),
  },
  Itemthree: {
    // backgroundColor: 'red',
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: h('17%'),
  },
  ItemText: {
    fontSize: h('2.8%'),
    fontWeight: '400',
    color: 'black',
  },
});
