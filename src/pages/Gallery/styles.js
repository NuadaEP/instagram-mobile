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
    width
  },
  imagePreview: { width: 150, height: 200 }
});

export default styles;
