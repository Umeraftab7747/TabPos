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

export class Screentwo extends Component {
  render() {
    return (
      <View style={styles.Conatiner}>
        {/* leftCotnainer */}
        <View style={styles.leftContainer}>
          <Navbar2
            press={() => {
              this.props.navigation.openDrawer();
            }}
          />
          {/* Left Container 1 */}
          <View style={styles.topLeftCotnainer}>
            <Text style={styles.topLeftContainerText}>19 Dec 2020</Text>
          </View>
          <View style={styles.TimeContainer}>
            <Text style={styles.TimeText}>7:00 Pm</Text>
            <Text style={styles.TimeText}>P50</Text>
          </View>
          <View style={styles.TimeContainer}>
            <Text style={styles.TimeText}>7:00 Pm</Text>
            <Text style={styles.TimeText}>P50</Text>
          </View>
          <View style={styles.TimeContainer}>
            <Text style={styles.TimeText}>7:00 Pm</Text>
            <Text style={styles.TimeText}>P50</Text>
          </View>
          <View style={styles.TimeContainer}>
            <Text style={styles.TimeText}>7:00 Pm</Text>
            <Text style={styles.TimeText}>P50</Text>
          </View>
          <View style={styles.TimeContainer}>
            <Text style={styles.TimeText}>7:00 Pm</Text>
            <Text style={styles.TimeText}>P50</Text>
          </View>
          {/* Container 2 */}
          <View style={styles.topLeftCotnainer}>
            <Text style={styles.topLeftContainerText}>19 Dec 2020</Text>
          </View>
          <View style={styles.TimeContainer}>
            <Text style={styles.TimeText}>7:00 Pm</Text>
            <Text style={styles.TimeText}>P50</Text>
          </View>
          <View style={styles.TimeContainer}>
            <Text style={styles.TimeText}>7:00 Pm</Text>
            <Text style={styles.TimeText}>P50</Text>
          </View>
          <View style={styles.TimeContainer}>
            <Text style={styles.TimeText}>7:00 Pm</Text>
            <Text style={styles.TimeText}>P50</Text>
          </View>
        </View>

        {/* RightContainer */}
        <View style={styles.RightContainer}>
          {/* navbar */}
          <View style={styles.topNavbar}>
            <Text style={styles.navbartext}>CASH</Text>
          </View>
          {/* Cash ConTainer */}
          <View style={styles.Topbridge}>
            <View style={styles.leftBridge}>
              <Text style={styles.leftBridgeText}>TOTAL</Text>
              <Text style={styles.leftBridgeText2}>P50</Text>
            </View>
            <View style={styles.RightBridge}>
              <Text style={styles.leftBridgeText}>Item</Text>
              <Text style={styles.leftBridgeText2}>1</Text>
            </View>
          </View>
          {/* Recipt  */}

          <View style={styles.ReciptContainer}>
            <View style={styles.TopRecipt}>
              {/* RECIPT ITEM  */}
              <View style={styles.ItemRecpit}>
                <Text style={styles.itemText}>ITEM 1</Text>
                <Text style={styles.itemText}>P50</Text>
              </View>
              {/* END RECPIT ITEM */}
            </View>
            <View style={styles.BottomRecipt}>
              <View style={styles.Subtotal50}>
                <Text style={styles.subtotalText}>SUBTOTAL</Text>
                <Text style={styles.subtotalText}>P50</Text>
              </View>
              <View style={styles.lowerButtonContainer}>
                <View style={[styles.RecpitButtn, {backgroundColor: 'tomato'}]}>
                  <Text style={styles.btnText}>Recipt#5224</Text>
                </View>
                <View style={[styles.RecpitButtn, {backgroundColor: 'pink'}]}>
                  <Text style={styles.btnText}>Refund</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Conatiner: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    // backgroundColor: 'red',
    width: w('30%'),
    height: h('100%'),
  },
  topLeftCotnainer: {
    backgroundColor: '#ccf6c8',
    width: '100%',
    height: h('12%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  topLeftContainerText: {
    color: 'white',
    fontSize: h('3.5%'),
    fontWeight: 'bold',
  },
  TimeContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: h('9%'),
    borderBottomWidth: h('0.1%'),
    borderColor: '#0007',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: h('2%'),
    paddingRight: h('2%'),
  },
  TimeText: {
    color: 'black',
    fontSize: h('2.2%'),
    fontWeight: '300',
  },
  RightContainer: {
    backgroundColor: '#e2e2e2',
    width: '70%',
    height: h('100%'),
    alignItems: 'center',
  },
  topNavbar: {
    backgroundColor: 'white',
    width: '100%',
    height: h('7.8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbartext: {
    color: 'black',
    fontSize: h('3%'),
    fontWeight: '300',
  },
  Topbridge: {
    backgroundColor: '#e2e2e2',
    width: '100%',
    height: h('20%'),
    flexDirection: 'row',
  },
  leftBridge: {
    // backgroundColor: 'green',
    width: '45%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  RightBridge: {
    // backgroundColor: 'gold',
    width: '45%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftBridgeText: {
    color: '#0007',
    fontSize: h('2%'),
  },
  leftBridgeText2: {
    color: '#000',
    fontSize: h('5%'),
  },
  ReciptContainer: {
    backgroundColor: 'white',
    width: '70%',
    height: '60%',
    marginTop: h('5%'),
    elevation: h('3%'),
    borderRadius: h('1%'),
  },
  TopRecipt: {
    // backgroundColor: 'gold',
    width: '100%',
    height: '72%',
    borderBottomWidth: h('0.1%'),
    borderBottomColor: '#0003',
    paddingLeft: h('2%'),
    paddingRight: h('2%'),
  },
  BottomRecipt: {
    // backgroundColor: 'green',
    width: '100%',
    height: '25%',
    alignItems: 'flex-end',
  },
  Subtotal50: {
    // backgroundColor: 'red',
    width: '50%',
    height: h('7%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: h('5%'),
    flexDirection: 'row',
  },
  subtotalText: {
    color: '#0007',
    fontSize: h('3%'),
    fontWeight: '400',
  },
  lowerButtonContainer: {
    // backgroundColor: 'gold',
    width: '100%',
    height: h('8%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  RecpitButtn: {
    // backgroundColor: 'red',
    width: '40%',
    height: h('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: h('1%'),
  },
  btnText: {
    color: 'white',
    fontSize: h('3%'),
    fontWeight: '400',
  },
  ItemRecpit: {
    // backgroundColor: 'white',
    width: '100%',
    height: h('7%'),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    color: 'black',
    fontSize: h('2.6%'),
    fontWeight: '400',
  },
});
