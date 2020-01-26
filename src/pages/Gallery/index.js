import React, { Component } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ScrollView,
  ActivityIndicator
} from "react-native";
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
    first: 100,
    paused: false,
    loading: true
  };

  mediaContainer = () => {
    const {
      current: { width, height, uri, type },
      paused
    } = this.state;

    if (type == "video/mp4")
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

  handleMedia = image => {
    this.refs._scrollView.scrollTo({ x: 0, y: 0, animated: true });
    this.setState({ current: image });
  };

  getPhotos = async (first = 100) => {
    const { groupTypes } = this.state;

    const params = {
      first,
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
  };

  async componentDidMount() {
    await this.getPhotos();
  }

  render() {
    const { images, paused, loading, first } = this.state;

    if (loading) return <ActivityIndicator size="large" />;

    return (
      <ScrollView style={styles.container} ref="_scrollView">
        <View style={styles.headerContainer}>
          <View style={styles.headerActions}>
            <Icon name="times" size={22} />
            <Text style={styles.groupTypes}>Galeria</Text>
          </View>
          <Text style={[styles.groupTypes, { color: "blue" }]}>Avançar</Text>
        </View>
        <View style={styles.imagePreviewContainer}>
          {paused ? (
            <TouchableWithoutFeedback
              onPress={() => this.setState({ paused: !paused })}
            >
              <Icon name="play" style={styles.playIcon} />
            </TouchableWithoutFeedback>
          ) : null}
          <this.mediaContainer />
        </View>
        <CameraRollList
          images={images}
          handleMedia={this.handleMedia.bind(this)}
          loadMore={this.getPhotos.bind(this)}
          first={first}
        />
      </ScrollView>
    );
  }
}
