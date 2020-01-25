import React from "react";

import { TouchableOpacity, Image, View } from "react-native";

import styles from "./styles";

const CameraRollItem = ({ image }) => (
  <TouchableOpacity onPress={() => false}>
    <Image source={{ uri: image.uri }} style={styles.image} />
  </TouchableOpacity>
);

export default CameraRollItem;
