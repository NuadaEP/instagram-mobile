import React from "react";

import Icon from 'react-native-vector-icons/MaterialIcons';

import CameraInterface from "../../components/CameraInterface";

const Video = () => <CameraInterface only="video" />;

export default Video;

Video.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="videocam" size={20} color={tintColor} />
}