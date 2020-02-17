import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import CameraRollHeader from "../../components/CameraRollHeader";

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from "./styles";

export default function Publish({ navigation }) {

  const { state: { params } } = navigation;

  handleFunction = () => {
    Alert.alert(
      'Publish',
      'You will publish this now, are you sure?',
      [
        {
          text: 'Cancel',
          onPress: () => { },
          style: 'cancel',
        },
        { text: 'OK', onPress: () => { } },
      ],
      { cancelable: false },
    );
  }

  return (
    <View style={styles.container}>
      <CameraRollHeader title="Publish" handleFunction={handleFunction} />
      <View style={styles.inputsContainer}>
        <View style={styles.inputView}>
          {params && <Image source={{ uri: params.response }} style={styles.imagePreviewContainer} />}
          <TextInput
            style={styles.input}
            placeholder="Write a thing..."
            multiline={true}
          >
          </TextInput>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text>Tag People</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text>Add Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

Publish.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="publish" size={20} color={tintColor} />
}
