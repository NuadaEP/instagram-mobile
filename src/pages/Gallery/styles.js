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
  }
});

export default styles;
