import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Center } from "@builderx/utils";
import MaterialButtonDark from "../components/MaterialButtonDark";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function AcceptedScreen(props) {
  return (
    <View style={styles.container}>
      <Center horizontal>
        <View style={styles.rect2}>
          <Text style={styles.loremIpsum}>
            Presente el siguiente QR en su abitab más cercano
          </Text>
          <MaterialButtonDark
            text1="Mis préstamos"
            button1="Untitled"
            style={styles.materialButtonDark1}
          ></MaterialButtonDark>
        </View>
      </Center>
      <View style={styles.rect3}>
        <Text style={styles.prestamoAceptado}>Préstamo Aceptado</Text>
        <View style={styles.icon1Row}>
          <EntypoIcon name="cross" style={styles.icon1}></EntypoIcon>
          <IoniconsIcon
            name="ios-checkmark-circle-outline"
            style={styles.icon2}
          ></IoniconsIcon>
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
    width: 360,
    height: 555,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute"
  },
  loremIpsum: {
    width: 290,
    height: 59,
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    textAlign: "center",
    marginTop: 40,
    marginLeft: 33
  },
  materialButtonDark1: {
    width: 294,
    height: 53,
    flex: 0,
    backgroundColor: "rgba(7,201,219,1)",
    borderRadius: 10,
    marginTop: 304,
    marginLeft: 33
  },
  rect3: {
    width: 360,
    height: 185,
    backgroundColor: "rgba(17,34,68,1)"
  },
  prestamoAceptado: {
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
    marginTop: 18
  },
  icon2: {
    color: "rgba(126,211,33,1)",
    fontSize: 113,
    marginLeft: 87
  },
  icon1Row: {
    height: 113,
    flexDirection: "row",
    marginTop: -153,
    marginLeft: 17,
    marginRight: 134
  }
});

export default AcceptedScreen;
