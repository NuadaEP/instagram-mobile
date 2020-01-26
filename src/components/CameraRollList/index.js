import React from "react";
import { View, FlatList } from "react-native";

import CameraRollItem from "../CameraRollItem";

import styles from "./styles";

CameraRollList = ({ images, handleMedia, loadMore, first }) => (
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
      onEndReached={() => {
        first = first + 100;

        loadMore(first);
      }}
      onEndReachedThreshold={0.1}
    />
  </View>
);

export default CameraRollList;
