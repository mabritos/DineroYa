import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonDark from "../components/MaterialButtonDark";

function OnRevisionScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <EntypoIcon name="clock" style={styles.icon2}></EntypoIcon>
        <Text style={styles.loremIpsum}>
          Su préstamo está siendo evaluado para aprobación
        </Text>
        <MaterialButtonDark
          text1="Mis préstamos"
          button1="Untitled"
          style={styles.materialButtonDark1}
        ></MaterialButtonDark>
      </View>
      <View style={styles.rect3}>
        <Text style={styles.prestamoEnRevision}>Préstamo en Revisión</Text>
        <EntypoIcon name="cross" style={styles.icon1}></EntypoIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect2: {
    top: 83,
    left: 0,
    height: 657,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 110,
    marginTop: 102,
    alignSelf: "center"
  },
  loremIpsum: {
    width: 290,
    height: 70,
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    textAlign: "center",
    marginTop: 67,
    alignSelf: "center"
  },
  materialButtonDark1: {
    width: 294,
    height: 49,
    flex: 0,
    backgroundColor: "rgba(7,201,219,1)",
    borderRadius: 10,
    marginTop: 128,
    marginLeft: 33
  },
  rect3: {
    width: 360,
    height: 83,
    backgroundColor: "rgba(17,34,68,1)",
    flexDirection: "row"
  },
  prestamoEnRevision: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-700",
    lineHeight: 30,
    alignSelf: "center",
    marginLeft: 62
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    flex: 0,
    marginLeft: 17,
    marginTop: 33
  }
});

export default OnRevisionScreen;
