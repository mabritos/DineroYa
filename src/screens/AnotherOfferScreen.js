import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialButtonDark from "../components/MaterialButtonDark";
import EntypoIcon from "react-native-vector-icons/Entypo";

function AnotherOfferScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <Text style={styles.loremIpsum}>
          Le ofrecemos, en cambio el siguiente préstamo
        </Text>
        <Text style={styles.monto}>Monto</Text>
        <Text style={styles.text3}></Text>
        <Text style={styles.cuotas}>Cuotas</Text>
        <Text style={styles.text4}></Text>
        <MaterialButtonDark
          text1="Aceptar"
          button1="Untitled"
          style={styles.acceptButton}
        ></MaterialButtonDark>
        <MaterialButtonDark
          text1="Rechazar"
          button1="Untitled"
          style={styles.rejectButton}
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
  monto: {
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    marginTop: 46,
    marginLeft: 33
  },
  text3: {
    width: 299,
    height: 48,
    flex: 0.03,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 10,
    marginLeft: 32
  },
  cuotas: {
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    marginTop: 30,
    marginLeft: 32
  },
  text4: {
    width: 299,
    height: 46,
    flex: 0.03,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 2,
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 14,
    marginLeft: 32
  },
  acceptButton: {
    width: 294,
    height: 48,
    flex: 0,
    backgroundColor: "rgba(126,211,33,1)",
    borderRadius: 10,
    marginTop: 57,
    marginLeft: 33
  },
  rejectButton: {
    width: 294,
    height: 47,
    flex: 0,
    backgroundColor: "rgba(208,2,27,1)",
    borderRadius: 10,
    marginTop: 13,
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

export default AnotherOfferScreen;
