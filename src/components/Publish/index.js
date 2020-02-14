import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import CameraRollHeader from "../../components/CameraRollHeader";

import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from "./styles";

export default function Publish({ navigation }) {

  const { state: { params } } = navigation;

  console.log(params ? params.response : 'xereca');

  return (
    <ScrollView style={styles.container}>
      <CameraRollHeader title="Publish" />
      <View>
        <View style={styles.inputView}>
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

        <TouchableOpacity style={styles.button}>
          <Text>Also post to</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

Publish.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon name="publish" size={20} color={tintColor} />
}
