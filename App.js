/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { UploadPIc, GeneralInfo, VehicleInfo, AadditionalInfo } from './component'
import FadeInView from './component/FadeIn';
import FadeOutView from './component/FadeOut';
import Upload from "./component/Upload";
import HeaderComponent from './component/Upload/Header'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { id: 1, active: true, title: "uploadPIc" },
        { id: 2, active: false, title: "generalInfo" },
        { id: 3, active: false, title: "vehicleInfo" },
        { id: 4, active: false, title: "additionalInfo" }
      ],
      active: 1,
      cicle: false
    }
  }

  renderIem = (val, i) => {
    switch (val.title) {
      case 'uploadPIc':
        return <Upload />
      case 'generalInfo':
        return <GeneralInfo />
      case 'vehicleInfo':
        return <VehicleInfo />
      case 'additionalInfo':
        return <AadditionalInfo />
      default: 'default'
    }
  }
  handleNext = (val, index) => {
    let { data } = this.state;
    this.setState({ active: this.state.active + 1 })
    data[index].active = this.state.data[index + 1].active = true
    this.setState(data)
  }
  render() {
    return (
      <View>
        <HeaderComponent
          {...this.props}
          headerText="Vehicles List"
          icon={require('./component/back_arrow.png')}
          back={() => alert(23432)}
        />
        <View style={{ width: '66%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          {this.state.data.map((val, index) => {
            return (
              <View style={{ alignSelf: 'center' }} key={index}>
                <View style={{ flexDirection: 'row' }} >
                  {val.active ?
                    <FadeInView vala={val} circle={true} />
                    :
                    <View style={styles.circle}><Text style={{ color: '#000000' }}>{val.id}</Text>
                    </View>
                  }
                  {val.id < 4 ?
                    <View style={{ justifyContent: "center", marginLeft: -2, marginRight: -2 }}>
                      {val.active ?
                        <FadeInView line={true} />
                        :
                        <View style={styles.line}></View>}
                    </View>
                    : null}
                </View>
              </View>
            )
          })}
        </View>
        {this.state.data.map((val, index) => {
          if (val.id == this.state.active) {
            return (
              <View key={index}>
                <FadeOutView duration={2000}>
                  {/* <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={{ width: '34%' }}>
                      <Text>Line</Text>
                    </View>
                  </View> */}

                  <View style={{ width: '100%', marginTop: 20 }}>
                    {this.renderIem(val, index)}
                  </View>
                </FadeOutView>
                {
                  val.id < 4 ?
                    <TouchableOpacity onPress={() => this.handleNext(val, index)}>
                      <View style={styles.touch}><Text>Next</Text></View>
                    </TouchableOpacity>
                    : <TouchableOpacity onPress={() => alert("Suceess")}>
                      <View style={styles.touch}><Text>Submit</Text></View>
                    </TouchableOpacity>
                }
              </View>
            )
          }
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  circle: {
    width: 28,
    height: 28,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 14,
    backgroundColor: "#CCCCCC",
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleActive: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 15,
    backgroundColor: "#f8c000",
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 45,
    height: 6,
    backgroundColor: '#CCCCCC',
    // justifyContent: 'center',
    alignContent: 'center',

  },
  activeLine: {
    width: 30,
    height: 10,
    backgroundColor: '#f8c000',
    // justifyContent: 'center',
    alignContent: 'center',

  },
  touch: {
    backgroundColor: "#f8c000",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 20,
    // position: 'absolute',
    // bottom: 0
    // marginTop: 150
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});
