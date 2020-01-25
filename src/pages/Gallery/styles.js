import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imagePreviewContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    height,
    width,
    backgroundColor: "#e5e5e5"
  },
  playIcon: {
    zIndex: 999,
    fontSize: 40,
    color: "white"
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default styles;
