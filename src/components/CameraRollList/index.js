import React, { Component } from "react";
import { View, Image, FlatList, ActivityIndicator } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";

import CameraRollItem from "../CameraRollItem";

import styles from "./styles";

export default class CameraRollList extends Component {
  state = {
    current: {},
    images: [],
    loading: true
  };

  async componentDidMount() {
    const { groupTypes } = this.props;

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
    const { current, images, loading } = this.state;

    if (loading) return <ActivityIndicator size="large" />;

    return (
      <View style={styles.container}>
        <FlatList
          data={images}
          renderItem={({ item, index }) => <CameraRollItem image={item} />}
          keyExtractor={item => String(Math.random() * item.id)}
          columnWrapperStyle={styles.columnWrapper}
          numColumns={4}
          style={{ flex: 2 }}
          // ListHeaderComponent={ListHeaderComponent}
        />
      </View>
    );
  }
}
