/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { UploadPIc, GeneralInfo, VehicleInfo, AadditionalInfo } from './component'

export default class App extends Component<> {
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
        return <UploadPIc />
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
        <View style={{ width: '80%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
          {this.state.data.map((val, index) => {
            return (
              <View style={{ alignSelf: 'center' }} key={index}>
                <View style={{ flexDirection: 'row' }} >
                  <View style={val.active ? styles.circleActive : styles.circle}><Text>{val.id}</Text></View>
                  {val.id < 4 ?
                    <View style={{ justifyContent: "center", marginLeft: -2, marginRight: -2 }}>
                      <View style={val.active ? styles.activeLine : styles.line}></View>
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
                <View style={{ margin: 15, marginLeft: 20 }}>
                  {this.renderIem(val, index)}
                </View>
                {val.id < 4 ?
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
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 15,
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
    width: 30,
    height: 10,
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
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    marginTop: 150
  }
});
