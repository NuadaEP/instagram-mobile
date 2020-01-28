import "react-native-gesture-handler";
import React, { Component } from "react";
import { Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import Gallery from "./pages/Gallery";
import Photo from "./pages/Photo";
import Video from "./pages/Video";

export default class App extends Component {
  state = {
    index: 0,
    routes: [
      {
        key: "photo",
        title: "Foto"
      },
      {
        key: "gallery",
        title: "Galeria"
      },
      {
        key: "video",
        title: "Vídeo"
      }
    ]
  };

  renderScene = SceneMap({
    photo: Photo,
    gallery: Gallery,
    video: Video
  });

  renderTabBar = props => (
    <TabBar
      {...props}
      activeColor="black"
      inactiveColor="gray"
      indicatorStyle={{ backgroundColor: "black" }}
      style={{ backgroundColor: "white" }}
      labelStyle={{ fontSize: 14 }}
    />
  );

  render() {
    const initialLayout = { width: Dimensions.get("window").width };

    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        onIndexChange={index => this.setState({ index })}
        initialLayout={initialLayout}
        swipeEnabled={true}
        tabBarPosition="bottom"
        renderTabBar={props => this.renderTabBar(props)}
      />
    );
  }
}
