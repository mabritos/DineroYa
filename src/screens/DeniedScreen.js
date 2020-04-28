import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonDark from "../components/MaterialButtonDark";
import EntypoIcon from "react-native-vector-icons/Entypo";

function DeniedScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <MaterialButtonDark
          text1="Mis préstamos"
          button1="Untitled"
          style={styles.materialButtonDark1}
        ></MaterialButtonDark>
      </View>
      <View style={styles.rect3}>
        <Text style={styles.prestamoDenegado}>Préstamo Denegado</Text>
        <View style={styles.icon1Row}>
          <EntypoIcon name="cross" style={styles.icon1}></EntypoIcon>
          <EntypoIcon
            name="circle-with-cross"
            style={styles.icon2}
          ></EntypoIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect2: {
    top: 185,
    left: 0,
    height: 555,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0
  },
  materialButtonDark1: {
    width: 294,
    height: 60,
    flex: 0,
    backgroundColor: "rgba(7,201,219,1)",
    borderRadius: 10,
    marginTop: 395,
    marginLeft: 33
  },
  rect3: {
    width: 360,
    height: 185,
    backgroundColor: "rgba(17,34,68,1)"
  },
  prestamoDenegado: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-700",
    lineHeight: 30,
    marginTop: 138,
    alignSelf: "center"
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    flex: 0,
    marginTop: 11
  },
  icon2: {
    color: "rgba(208,2,27,1)",
    fontSize: 110,
    marginLeft: 78
  },
  icon1Row: {
    height: 110,
    flexDirection: "row",
    marginTop: -146,
    marginLeft: 17,
    marginRight: 125
  }
});

export default DeniedScreen;
