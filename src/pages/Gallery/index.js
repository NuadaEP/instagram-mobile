import React, { Component } from "react";
import { View, Image, Dimensions } from "react-native";
import CameraRollPicker from "react-native-camera-roll-picker";
import CameraRoll from "@react-native-community/cameraroll";
import ImageZoom from "react-native-image-pan-zoom";

import styles from "./styles";

export default class App extends Component {
  state = {
    current: {},
    groupTypes: "SavedPhotos",
    assetType: "Photos"
  };

  async componentDidMount() {
    const { groupTypes, assetType } = this.state;
    const params = {
      first: 1,
      groupTypes,
      assetType
    };

    const { edges } = await CameraRoll.getPhotos(params);

    this.setState({ current: edges[0].node.image });
  }

  render() {
    const { current, groupTypes, assetType } = this.state;

    const width = current.width;
    const height = current.height;

    const widthMult = width;
    const heightMult = height;

    return (
      <View style={styles.container}>
        <View style={styles.imagePreviewContainer}>
          <ImageZoom
            cropWidth={Dimensions.get("window").width}
            cropHeight={Dimensions.get("window").height}
            imageWidth={widthMult}
            imageHeight={heightMult}
            minScale={0.1}
          >
            <Image source={{ uri: current.uri }} style={{ height, width }} />
          </ImageZoom>
        </View>
        <CameraRollPicker
          groupTypes={groupTypes}
          selectSingleItem={true}
          assetType={assetType}
          imagesPerRow={3}
          imageMargin={5}
          callback={(images, current) =>
            this.setState({
              current
            })
          }
        />
      </View>
    );
  }
}
