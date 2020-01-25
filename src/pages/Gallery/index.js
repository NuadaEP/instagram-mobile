import React, { Component } from "react";
import {
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
  ActivityIndicator
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
    images: [],
    groupTypes: "SavedPhotos",
    paused: false,
    loading: true
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

  handleMedia = image => this.setState({ current: image });

  async componentDidMount() {
    const { groupTypes } = this.state;

    const params = {
      first: 100,
      groupTypes,
      assetType: "All",
      mimeTypes: [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/jpeg",
        "video/mp4"
      ]
    };

    const { edges } = await CameraRoll.getPhotos(params);

    const images = edges.map(({ node: image }) => ({
      id: image.timestamp,
      type: image.type,
      ...image.image
    }));

    this.setState({ current: images[0], images, loading: false });
  }

  render() {
    const { current, images, paused, loading } = this.state;
    const { uri } = current;
    let mediaType;

    if (uri) {
      const uriSplited = uri.split(".");

      mediaType = uriSplited[uriSplited.length - 1];
    }

    if (loading) return <ActivityIndicator size="large" />;

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
        <CameraRollList
          images={images}
          handleMedia={this.handleMedia.bind(this)}
        />
      </View>
    );
  }
}
