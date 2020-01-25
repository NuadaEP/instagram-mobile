import React, { Component } from "react";
import {
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions
} from "react-native";
import CameraRollPicker from "react-native-camera-roll-picker";
import CameraRoll from "@react-native-community/cameraroll";
import Video from "react-native-video";
import Icon from "react-native-vector-icons/FontAwesome";

import ViewZoom from "../../components/ViewZoom";
import CameraRollList from "../../components/CameraRollList";

import styles from "./styles";

export default class App extends Component {
  state = {
    current: {},
    groupTypes: "SavedPhotos",
    assetType: "All",
    paused: false
  };

  mediaContainer = ({ mediaType }) => {
    const {
      current: { width, height, uri },
      paused
    } = this.state;

    if (mediaType == "mp4")
      return (
        <TouchableWithoutFeedback
          onPress={() => this.setState({ paused: !paused })}
        >
          <Video
            source={{ uri }}
            resizeMode="cover"
            repeat={true}
            paused={paused}
            style={styles.video}
          />
        </TouchableWithoutFeedback>
      );

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
    const { current, groupTypes, assetType, paused } = this.state;
    const { uri } = current;
    let mediaType;

    if (uri) {
      const uriSplited = uri.split(".");

      mediaType = uriSplited[uriSplited.length - 1];
    }

    return (
      <View
        style={[
          styles.container,
          {
            height: Dimensions.get("screen").height,
            width: Dimensions.get("screen").width
          }
        ]}
      >
        <View style={styles.imagePreviewContainer}>
          {paused ? (
            <TouchableWithoutFeedback
              onPress={() => this.setState({ paused: !paused })}
            >
              <Icon name="play" style={styles.playIcon} />
            </TouchableWithoutFeedback>
          ) : null}
          <this.mediaContainer mediaType={mediaType} />
        </View>
        <CameraRollList />
      </View>
    );
  }
}
