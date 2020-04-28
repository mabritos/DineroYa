import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonDark from "../components/MaterialButtonDark";

function NfcReaderScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>3/4</Text>
        <Text style={styles.lecturaDeCedula1}>Lectura de Cédula</Text>
        <EntypoIcon name="cross" style={styles.icon1}></EntypoIcon>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.monto1}>
          Encienda NFC y acerque su cédula al dispositivo
        </Text>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/2000px-NFC_logo.svg.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <EntypoIcon name="v-card" style={styles.icon2}></EntypoIcon>
        </View>
        <MaterialButtonDark
          text1="Leer Cédula"
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
    width: 360,
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
    marginRight: -233,
    marginTop: 30
  },
  lecturaDeCedula1: {
    flex: 0,
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 100,
    marginTop: 34
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    flex: 0,
    marginLeft: -243,
    marginTop: 33
  },
  rect2: {
    width: 360,
    height: 659,
    backgroundColor: "rgba(255,255,255,1)",
    paddingLeft: 0
  },
  monto1: {
    width: 241,
    height: 41,
    flex: 0,
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    textAlign: "center",
    marginTop: 116,
    marginLeft: 59
  },
  image: {
    width: 102,
    height: 102,
    flex: 0,
    marginLeft: 184,
    marginTop: 23
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 149,
    flex: 0,
    marginLeft: -286
  },
  imageRow: {
    height: 149,
    flexDirection: "row",
    marginTop: 78,
    marginLeft: 32,
    marginRight: 42
  },
  materialButtonDark1: {
    width: 294,
    height: 45,
    flex: 0,
    backgroundColor: "rgba(7,201,219,1)",
    borderRadius: 10,
    marginTop: 97,
    marginLeft: 33
  }
});

export default NfcReaderScreen;
