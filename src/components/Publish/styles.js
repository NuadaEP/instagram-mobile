import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  input: {
  },
  inputView: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 1,
    alignItems: "center"
  },
  button: {
    paddingVertical: 15,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 1
  },
  headerContainer: {
    backgroundColor: "white",
    zIndex: 999,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  groupTypes: {
    fontSize: 18,
    marginLeft: 10
  },
  headerActions: {
    flexDirection: "row"
  },
  imagePreviewContainer: {
    height: 75,
    width: 75,
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
