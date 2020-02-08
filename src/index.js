import "react-native-gesture-handler";
import React, { Component } from "react";
import { Dimensions, PermissionsAndroid } from "react-native";

import App from './App';

export default class Index extends Component {
  // const Index = () => {
  async componentDidMount() {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
      title: "Camera Permission",
      message: "This app needs access to your camera",
      buttonNeutral: "Ask Me Later",
      buttonNegative: "Cancel",
      buttonPositive: "OK"
    });

    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "Read Store Permission",
        message: "This app needs access to your files",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );

    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Write Store Permission",
        message: "This app needs use your local storage",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );

    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: "Record Store Permission",
        message: "This app needs your permission to record",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
  }

  render() {
    return (
      <>
        <App />
      </>
    )
  }
}

// export default Index;
