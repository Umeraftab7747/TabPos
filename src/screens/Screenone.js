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
import {Navbar} from '../component';

export class Screenone extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        {/* RightContainer */}
        <View style={styles.RightContainer}>
          <Navbar
            press={() => {
              this.props.navigation.openDrawer();
            }}
          />
          {/* Mian Button Container */}
          <View style={styles.UpperButton}>
            {/* button1 */}
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>BUTTON 1</Text>
            </TouchableOpacity>
            {/* button2 */}
            <TouchableOpacity
              style={[styles.buttonContainer, {borderColor: 'purple'}]}>
              <Text style={styles.buttonText}>BUTTON 2</Text>
            </TouchableOpacity>
            {/* button3 */}
            <TouchableOpacity
              style={[styles.buttonContainer, {borderColor: 'blue'}]}>
              <Text style={styles.buttonText}>BUTTON 3</Text>
            </TouchableOpacity>
            {/* button4 */}
            <TouchableOpacity
              style={[styles.buttonContainer, {borderColor: '#f54291'}]}>
              <Text style={styles.buttonText}>BUTTON 4</Text>
            </TouchableOpacity>
            {/* button5 */}
          </View>
          {/* 2nd */}

          <View style={styles.UpperButton}>
            {/* button1 */}
            <TouchableOpacity
              style={[styles.buttonContainer, {borderColor: 'orange'}]}>
              <Text style={styles.buttonText}>BUTTON 6</Text>
            </TouchableOpacity>
            {/* button2 */}
            <TouchableOpacity
              style={[styles.buttonContainer, {borderColor: '#709fb0'}]}>
              <Text style={styles.buttonText}>BUTTON 7</Text>
            </TouchableOpacity>
            {/* button3 */}
            <TouchableOpacity
              style={[styles.buttonContainer, {borderColor: 'purple'}]}>
              <Text style={styles.buttonText}>BUTTON 8</Text>
            </TouchableOpacity>
            {/* button4 */}
            <TouchableOpacity
              style={[styles.buttonContainer, {borderColor: 'yellow'}]}>
              <Text style={styles.buttonText}>BUTTON 9</Text>
            </TouchableOpacity>
            {/* button5 */}
          </View>
        </View>
        {/* LeftContainer */}
        <View style={styles.LeftContainer}>
          <View style={styles.leftTopContainer}>
            <Text style={styles.topHellow}>HELLOW!</Text>
          </View>
          <View style={styles.leftmiddleContainer}>
            <View style={styles.Subtotal}>
              <Icon
                name={'beer-outline'}
                type="ionicon"
                size={55}
                color="tomato"
              />
              <Text style={styles.Subtotalp0Text}> SUBTOTAL </Text>
              <Text style={styles.Subtotalp0Text}> P0</Text>
            </View>
            <View style={[styles.Subtotal, {justifyContent: 'space-between'}]}>
              <Text style={styles.service10Text}> Service 10% </Text>
              <Text style={styles.service10Text}> p0</Text>
            </View>
          </View>
          <View style={styles.leftBottomContainer}>
            {/* UpperButton1 */}
            <View style={styles.upper}>
              {/* RightScreenButton */}
              <TouchableOpacity
                style={[styles.RightScreenButton, {borderColor: '#f05454'}]}>
                <Text style={[styles.RButtonText, {color: '#f05454'}]}>P0</Text>
              </TouchableOpacity>
              {/* RightScreenButton */}
              <TouchableOpacity
                style={[styles.RightScreenButton, {borderColor: '#af2d2d'}]}>
                <Text style={[styles.RButtonText, {color: '#af2d2d'}]}>
                  P100
                </Text>
              </TouchableOpacity>
              {/* RightScreenButton */}
              <TouchableOpacity
                style={[styles.RightScreenButton, {borderColor: '#c060a1'}]}>
                <Text style={[styles.RButtonText, {color: '#c060a1'}]}>
                  P200
                </Text>
              </TouchableOpacity>
            </View>
            {/* UpperButton1 */}
            <View style={styles.upper}>
              {/* RightScreenButton */}
              <TouchableOpacity
                style={[styles.RightScreenButton, {borderColor: '#a8dda8'}]}>
                <Text style={[styles.RButtonText, {color: '#a8dda8'}]}>
                  P300
                </Text>
              </TouchableOpacity>
              {/* RightScreenButton */}
              <TouchableOpacity
                style={[styles.RightScreenButton, {borderColor: '#28abb9'}]}>
                <Text style={[styles.RButtonText, {color: '#28abb9'}]}>
                  P400
                </Text>
              </TouchableOpacity>
              {/* RightScreenButton */}
              <TouchableOpacity
                style={[styles.RightScreenButton, {borderColor: '#0004'}]}>
                <Text style={[styles.RButtonText, {color: '#0004'}]}>
                  Custom
                </Text>
              </TouchableOpacity>
            </View>
            {/* End of Upper Buttons */}

            <View style={[styles.upper, {flexDirection: 'row'}]}>
              <View style={styles.leftupperContainer}>
                <Text style={styles.CashRewardText}>CASH REWARD</Text>
                <Text style={styles.CashRewardValueText}>P0</Text>
              </View>
              <View style={styles.RightupperContainer}>
                <Text style={styles.CashRewardText}>CHARGE</Text>
                <Text style={styles.CashRewardValueText}>P0</Text>
              </View>
            </View>
            {/* last 3 button */}
            <View style={[styles.upper]}>
              <TouchableOpacity style={styles.bottomTabButtons}>
                <Text style={styles.BottombtnText}>Gcash</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.bottomTabButtons, {backgroundColor: 'gold'}]}>
                <Text style={styles.BottombtnText}>Card</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.bottomTabButtons, {backgroundColor: '#b8de6f'}]}>
                <Text style={styles.BottombtnText}>Cash p0</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  RightContainer: {
    backgroundColor: '#1b262c',
    width: w('65%'),
    height: h('100%'),
    paddingTop: h('2%'),
  },
  LeftContainer: {
    backgroundColor: 'white',
    width: w('35%'),
    height: h('100%'),

    alignItems: 'center',
    paddingTop: h('2%'),
  },
  buttonContainer: {
    // backgroundColor: 'white',
    width: w('15%'),
    height: h('20%'),
    borderColor: 'green',
    borderWidth: h('0.5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: h('2.2%'),
  },
  UpperButton: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('22%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  topHellow: {
    color: '#a8dda8',
    fontSize: h('2.8%'),
    fontWeight: 'bold',
  },
  leftTopContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('5%'),
    alignItems: 'center',
  },
  leftmiddleContainer: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('52%'),
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingLeft: h('2%'),
    paddingRight: h('2%'),
  },
  leftBottomContainer: {
    // backgroundColor: 'gold',
    width: '100%',
    height: h('37%'),
    alignItems: 'center',
  },
  Subtotal: {
    // backgroundColor: 'gold',
    width: '60%',
    height: h('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Subtotalp0Text: {
    color: 'black',
    fontSize: h('3%'),
  },
  service10Text: {
    color: 'black',
    fontSize: h('2.8%'),
  },
  upper: {
    // backgroundColor: 'red',
    width: '100%',
    height: h('10%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  RightScreenButton: {
    backgroundColor: 'white',
    // borderColor: 'red',
    borderWidth: h('0.3%'),
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: h('6%'),
    borderRadius: h('1%'),
  },
  RButtonText: {
    fontSize: h('2.8%'),
  },
  leftupperContainer: {
    // backgroundColor: 'red',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightupperContainer: {
    // backgroundColor: 'gold',
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CashRewardText: {
    color: '#0007',
    fontSize: h('2%'),
  },
  CashRewardValueText: {
    color: 'black',
    fontSize: h('2.8%'),
    fontWeight: '600',
  },
  bottomTabButtons: {
    backgroundColor: 'dodgerblue',
    width: '25%',
    height: h('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('1%'),
  },
  BottombtnText: {
    color: 'white',
    fontSize: h('2.5%'),
    fontWeight: 'bold',
  },
});
