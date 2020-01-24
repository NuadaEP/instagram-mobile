import React, { Component } from "react";
import { View, Vi } from "react-native";
import CameraRollPicker from "react-native-camera-roll-picker";
import CameraRoll from "@react-native-community/cameraroll";
import Video from "react-native-video";

import ViewZoom from "../../components/ViewZoom";

import styles from "./styles";

export default class App extends Component {
  state = {
    current: {},
    groupTypes: "SavedPhotos",
    assetType: "All"
  };

  mediaContainer = mediaType => {
    const {
      current: { width, height, uri }
    } = this.state;

    if (mediaType == "mp4") return <Video source={uri} />;

    return <ViewZoom width={width} height={height} uri={uri} />;
  };

  async componentDidMount() {
    const { groupTypes, assetType } = this.state;
    const params = {
      first: 20,
      groupTypes,
      assetType
    };

    const { edges } = await CameraRoll.getPhotos(params);

    this.setState({ current: edges[0].node.image });
  }

  render() {
    const { current, groupTypes, assetType } = this.state;
    const { width, height, uri } = current;
    let mediaType;

    if (uri) {
      const uriSplited = uri.split(".");

      mediaType = uriSplited[uriSplited.length - 1];
    }

    return (
      <View style={styles.container}>
        <View style={styles.imagePreviewContainer}>
          <this.mediaContainer mediaType={mediaType} />
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
