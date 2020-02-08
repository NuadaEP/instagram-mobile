import "react-native-gesture-handler";
import React, { Component } from "react";
import { Dimensions, PermissionsAndroid } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import Gallery from "./pages/Gallery";
import Photo from "./pages/Photo";
import Video from "./pages/Video";

import App from './App';


export default class Index extends Component {
  // state = {
  //   index: 0,
  //   routes: [
  //     {
  //       key: "gallery",
  //       title: "Galeria"
  //     },
  //     {
  //       key: "photo",
  //       title: "Foto"
  //     },
  //     {
  //       key: "video",
  //       title: "Vídeo"
  //     }
  //   ]
  // };

  // renderTabBar = props => (
  //   <TabBar
  //     {...props}
  //     activeColor="black"
  //     inactiveColor="gray"
  //     indicatorStyle={{ backgroundColor: "black" }}
  //     style={{ backgroundColor: "white" }}
  //     labelStyle={{ fontSize: 14 }}
  //   />
  // );

  // async componentDidMount() {
  //   await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
  //     title: "Camera Permission",
  //     message: "This app needs access to your camera",
  //     buttonNeutral: "Ask Me Later",
  //     buttonNegative: "Cancel",
  //     buttonPositive: "OK"
  //   });

  //   await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //     {
  //       title: "Read Store Permission",
  //       message: "This app needs access to your files",
  //       buttonNeutral: "Ask Me Later",
  //       buttonNegative: "Cancel",
  //       buttonPositive: "OK"
  //     }
  //   );

  //   await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //     {
  //       title: "Write Store Permission",
  //       message: "This app needs use your local storage",
  //       buttonNeutral: "Ask Me Later",
  //       buttonNegative: "Cancel",
  //       buttonPositive: "OK"
  //     }
  //   );

  //   await PermissionsAndroid.request(
  //     PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  //     {
  //       title: "Record Store Permission",
  //       message: "This app needs your permission to record",
  //       buttonNeutral: "Ask Me Later",
  //       buttonNegative: "Cancel",
  //       buttonPositive: "OK"
  //     }
  //   );
  // }

  render() {
    // const renderScene = SceneMap({
    //   gallery: Gallery,
    //   photo: Photo,
    //   video: Video
    // });
    // const initialLayout = { width: Dimensions.get("window").width };

    // return (
    //   <TabView
    //     navigationState={this.state}
    //     renderScene={renderScene}
    //     onIndexChange={index => this.setState({ index })}
    //     initialLayout={initialLayout}
    //     swipeEnabled={true}
    //     tabBarPosition="bottom"
    //     renderTabBar={props => this.renderTabBar(props)}
    //   />
    // );

    return (
      <>
        <App />
      </>
    )
  }
}
