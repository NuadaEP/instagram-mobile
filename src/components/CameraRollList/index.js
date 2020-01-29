import React, { Component } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import CameraRoll from "@react-native-community/cameraroll";

import CameraRollItem from "../CameraRollItem";

import styles from "./styles";

export default class CameraRollList extends Component {
  state = {
    images: [],
    groupTypes: "SavedPhotos",
    first: 0,
    loading: true
  };

  getPhotos = async () => {
    const { groupTypes, first, loading } = this.state;
    const { handleMedia } = this.props;

    const loadFirst = first + 100;

    console.log(loadFirst);

    const params = {
      first: loadFirst,
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

    let updateState = { images, loading: false };

    if (!loading) updateState = { images };

    this.setState(updateState);

    await handleMedia(images[0]);
  };

  componentDidMount() {
    this.getPhotos();
  }

  render() {
    const { images, first, loading } = this.state;
    const { handleMedia } = this.props;

    if (loading) return <ActivityIndicator size="large" />;

    return (
      <View style={styles.container}>
        <FlatList
          data={images}
          renderItem={({ item, index }) => (
            <CameraRollItem image={item} handleMedia={handleMedia} />
          )}
          keyExtractor={item => String(Math.random() * item.id)}
          columnWrapperStyle={styles.columnWrapper}
          numColumns={4}
          style={{ flex: 2 }}
          onEndReached={() => this.getPhotos}
          onEndReachedThreshold={0.1}
        />
      </View>
    );
  }
}
