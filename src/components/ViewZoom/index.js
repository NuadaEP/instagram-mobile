import React from "react";
import { Image, View, Dimensions } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";

const ViewZoom = ({ width, height, uri }) => (
  <View>
    <ImageZoom
      cropWidth={Dimensions.get("window").width}
      cropHeight={Dimensions.get("window").height}
      imageWidth={width}
      imageHeight={height}
      minScale={0.1}
      enableCenterFocus={false}
    >
      <Image source={{ uri }} style={{ height, width }} />
    </ImageZoom>
  </View>
);

export default ViewZoom;
