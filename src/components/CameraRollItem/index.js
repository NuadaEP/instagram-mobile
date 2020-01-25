import React from "react";

import { TouchableOpacity, Image, View } from "react-native";

import styles from "./styles";

const CameraRollItem = ({ image, handleMedia }) => (
  <TouchableOpacity onPress={() => handleMedia(image)}>
    <Image source={{ uri: image.uri }} style={styles.image} />
  </TouchableOpacity>
);

export default CameraRollItem;
