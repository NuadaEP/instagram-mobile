import React, { Component } from "react";
import { View, Image } from "react-native";
import CameraRollPicker from "react-native-camera-roll-picker";

import styles from "./styles";

export default class App extends Component {
  state = {
    num: 0,
    selected: [],
    current: {}
  };

  getSelectedImages = (images, current) => {
    this.setState({
      num: images.length,
      selected: images,
      current
    });

    console.log(current);
    console.log(images);
  };

  render() {
    const { current } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.imagePreviewContainer}>
          <Image source={{ uri: current.uri }} style={styles.imagePreview} />
        </View>
        <CameraRollPicker
          groupTypes="SavedPhotos"
          selected={this.state.selected}
          selectSingleItem={true}
          assetType="Photos"
          imagesPerRow={3}
          imageMargin={5}
          callback={this.getSelectedImages}
        />
      </View>
    );
  }
}
