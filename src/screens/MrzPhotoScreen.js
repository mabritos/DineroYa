import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import MaterialButtonDark from "../components/MaterialButtonDark";

function MrzPhotoScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>2/4</Text>
        <Text style={styles.codigoMrz}>Código MRZ</Text>
        <Icon name="cross" style={styles.icon1}></Icon>
      </View>
      <View style={styles.rect1}>
        <View style={styles.rect2}>
          <Text style={styles.loremIpsum2}>
            Tome una foto al código de la parte trasera de su cédula
          </Text>
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
    marginRight: -208,
    marginTop: 30
  },
  codigoMrz: {
    width: 110,
    height: 20,
    flex: 0,
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 125,
    marginTop: 34
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    flex: 0,
    marginLeft: -218,
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
    width: 360,
    height: 65,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.5
  },
  loremIpsum2: {
    height: 59,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    textAlign: "center",
    marginTop: 3
  },
  materialButtonDark1: {
    width: 121,
    height: 55,
    backgroundColor: "rgba(7,201,219,1)",
    borderRadius: 10,
    marginTop: 462,
    marginLeft: 119
  }
});

export default MrzPhotoScreen;
