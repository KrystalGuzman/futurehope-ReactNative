import React from "react";
import { View, Text, StyleSheet, ShadowPropTypesIOS, StatusBar } from "react-native";
import { NativeRouter, Route, Link, useHistory } from "react-router-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {
  const history = useHistory();
  function backHandler() {
    history.goBack();
  }

  return (
    <View style={styles.header}>
        <StatusBar hidden/>
      <Icon name="arrow-left" onPress={backHandler} size={24} color="black" />
      <Text style={styles.text}>School in the Sky</Text>
      <Link to="/">
        <Icon name="home" color="black" size={24} />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 75,
    justifyContent: "space-around",
    alignItems:'center'
  },
  text: {
    color: "black",
    fontSize: 16,
    textAlign: "center"
  }
});

export default Header;
