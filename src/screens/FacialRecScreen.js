import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialButtonDark from "../components/MaterialButtonDark";

function FacialRecScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>4/4</Text>
        <Text style={styles.codigoMrz}>Reconocimiento Facial</Text>
        <EntypoIcon name="cross" style={styles.icon1}></EntypoIcon>
      </View>
      <View style={styles.rect1}>
        <View style={styles.rect2}>
          <Text style={styles.loremIpsum2}>Tómese una foto sonriendo</Text>
          <MaterialIconsIcon
            name="tag-faces"
            style={styles.icon2}
          ></MaterialIconsIcon>
        </View>
        <MaterialButtonDark
          text1="SNAP"
          button1="Untitled"
          style={styles.materialButtonDark1}
        ></MaterialButtonDark>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(17,34,68,1)"
  },
  rect: {
    height: 81,
    backgroundColor: "rgba(17,34,68,1)",
    flexDirection: "row"
  },
  loremIpsum: {
    flex: 0,
    color: "rgba(255,255,255,1)",
    opacity: 0.5,
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    marginRight: -254,
    marginTop: 30
  },
  codigoMrz: {
    width: 202,
    height: 20,
    flex: 0,
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginLeft: 79,
    marginTop: 34
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    flex: 0,
    marginLeft: -264,
    marginTop: 33
  },
  rect1: {
    top: 81,
    left: 0,
    height: 659,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0
  },
  rect2: {
    height: 79,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.5
  },
  loremIpsum2: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    marginTop: 8,
    alignSelf: "center"
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 35,
    marginTop: 2,
    marginLeft: 163
  },
  materialButtonDark1: {
    width: 121,
    height: 55,
    backgroundColor: "rgba(7,201,219,1)",
    borderRadius: 10,
    marginTop: 448,
    marginLeft: 119
  }
});

export default FacialRecScreen;
