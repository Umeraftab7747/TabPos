/* eslint-disable react-native/no-inline-styles */
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

export class Screenthree extends Component {
  render() {
    return (
      <>
        <Navbar2
          text={'Cash Withdrawer'}
          press={() => {
            this.props.navigation.openDrawer();
          }}
        />
        <View style={styles.Conatiner}>
          {/* LeftContainer */}
          <View style={styles.leftContainer}>
            <View
              style={[
                styles.LeftListContainer,
                {justifyContent: 'flex-end', paddingRight: h('5%')},
              ]}>
              <Icon
                name={'lock-closed-outline'}
                type="ionicon"
                size={45}
                color="#ccf6c8"
              />
            </View>
            {/* container2 */}
            <View style={[styles.LeftListContainer, {marginTop: h('15%')}]}>
              <Text style={styles.LeftText}>String Cash</Text>
              <TextInput
                style={styles.TextInputStyle}
                underlineColorAndroid={'#0005'}
                placeholder={'2000'}
              />
            </View>
            <View style={styles.LeftListContainer}>
              <Text style={styles.LeftText}>Cash Add</Text>
              <TextInput
                style={styles.TextInputStyle}
                underlineColorAndroid={'#0005'}
                placeholder={'Amount'}
              />
            </View>
            <View style={styles.LeftListContainer}>
              <Text style={[styles.LeftText, {marginLeft: -h('5.5%')}]}>
                Expense
              </Text>
              <Text style={styles.LeftText}>P0</Text>
            </View>
            <View style={styles.LeftListContainer}>
              <Text style={styles.LeftText}>Cash Sales</Text>
              <TextInput
                style={styles.TextInputStyle}
                underlineColorAndroid={'#0005'}
                placeholder={'0'}
              />
            </View>
            <View style={styles.LeftListContainer}>
              <Text style={[styles.LeftText, {marginLeft: -h('5%')}]}>
                Non-Cash Sales
              </Text>
              <Text style={styles.LeftText}>0</Text>
            </View>

            <View
              style={[
                styles.LeftListContainer,
                {backgroundColor: 'tomato', marginTop: h('10%')},
              ]}>
              <Text
                style={[styles.LeftText, {color: 'white', fontWeight: 'bold'}]}>
                Cash in Drawer
              </Text>
              <Text
                style={[styles.LeftText, {color: 'white', fontWeight: 'bold'}]}>
                P20000
              </Text>
            </View>
          </View>
          {/* rightContainer */}
          <View style={styles.RightContainer}>
            <View style={styles.RightContainerView}>
              <TextInput
                style={styles.TextInputStyle}
                underlineColorAndroid={'#0005'}
                placeholder={'EXPENSE NAME'}
              />
              <TextInput
                style={styles.TextInputStyle}
                underlineColorAndroid={'#0005'}
                placeholder={'Pass amount'}
              />
              <View style={styles.ButtonPress}>
                <Text style={styles.BtnAddText}>ADD</Text>
              </View>
            </View>
            <View style={styles.ExpenseRecpit}>
              <View
                style={[styles.ExpenseTextHeader, {justifyContent: 'center'}]}>
                <Text style={styles.ExpenseText}>Expense</Text>
              </View>
              <View
                style={[
                  styles.ExpenseTextHeader,
                  {
                    marginTop: h('45%'),
                    backgroundColor: 'dodgerblue',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                ]}>
                <Text style={styles.ExpenseText}>TOTAL EXPENSE</Text>
                <Text style={styles.ExpenseText}>P0</Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  Conatiner: {
    flex: 1,
    backgroundColor: '#e2e2e2',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  leftContainer: {
    backgroundColor: 'white',
    width: '45%',
    height: h('80%'),
    marginTop: h('2%'),
  },
  RightContainer: {
    backgroundColor: 'white',
    width: '45%',
    height: h('80%'),
    marginTop: h('2%'),
    paddingRight: h('3%'),
    paddingLeft: h('3%'),
    alignItems: 'center',
  },
  LeftListContainer: {
    width: '100%',
    // backgroundColor: 'green',
    height: h('8%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  LeftText: {
    color: '#0008',
    fontSize: h('2.4%'),
    fontWeight: '400',
  },
  TextInputStyle: {
    // backgroundColor: 'red',
    width: '30%',
    height: h('7%'),
    paddingLeft: h('2%'),
  },
  RightContainerView: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('9%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ButtonPress: {
    backgroundColor: '#0004',
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
  ExpenseRecpit: {
    // backgroundColor: 'red',
    width: '95%',
    height: h('60%'),
    marginTop: h('5%'),
    borderColor: '#0002',
    borderWidth: h('0.2%'),
  },
  ExpenseTextHeader: {
    backgroundColor: 'green',
    width: '100%',
    height: h('8%'),

    paddingLeft: h('2%'),
    paddingRight: h('2%'),
    // alignItems: 'center',
  },
  ExpenseText: {
    color: 'white',
    fontSize: h('3%'),
  },
});
