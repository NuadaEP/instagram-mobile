import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import { RNCamera } from "react-native-camera";
import Icon from "react-native-vector-icons/FontAwesome5";

import styles from "./styles";

export default class CameraInterface extends Component {
  state = {
    camera: "back",
    flash: "auto"
  };

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  changeCamera = () => {
    const { camera } = this.state;

    let obj = { camera: "back" };

    if (camera == "back") obj = { camera: "front", flash: "auto" };

    this.setState(obj);
  };

  switchFlash = () => {
    const { flash } = this.state;

    let obj = { flash: "on" };

    if (flash == "on") obj = { flash: "off" };

    this.setState(obj);
  };

  render() {
    const { Type, FlashMode } = RNCamera.Constants;
    const { camera, flash } = this.state;

    const androidCameraPermissionOptions = {
      title: "Permission to use camera",
      message: "We need your permission to use your camera",
      buttonPositive: "Ok",
      buttonNegative: "Cancel"
    };

    const androidRecordAudioPermissionOptions = {
      title: "Permission to use audio recording",
      message: "We need your permission to use your audio",
      buttonPositive: "Ok",
      buttonNegative: "Cancel"
    };

    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={camera == "back" ? Type.back : Type.front}
          flashMode={flash == "on" ? FlashMode.on : FlashMode.off}
          androidCameraPermissionOptions={androidCameraPermissionOptions}
          androidRecordAudioPermissionOptions={
            androidRecordAudioPermissionOptions
          }
        />
        <View style={styles.controlsContainer}>
          <TouchableOpacity onPress={() => this.changeCamera()}>
            <Icon name="sync" color="white" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.switchFlash()}
            style={[
              styles.flashButton,
              {
                backgroundColor: flash == "on" ? "white" : "transparent"
              }
            ]}
          >
            <Icon
              name="bolt"
              color={flash == "on" ? "black" : "white"}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
          >
            <View style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
