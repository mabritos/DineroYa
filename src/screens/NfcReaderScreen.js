import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonDark from "../components/MaterialButtonDark";

function NfcReaderScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <EntypoIcon name="cross" style={styles.icon1}></EntypoIcon>
        <Text style={styles.lecturaDeCedula1}>Lectura de Cédula</Text>
        <Text style={styles.step}>3/4</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.instructions}>
          Encienda NFC y acerque su cédula al dispositivo
        </Text>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/2000px-NFC_logo.svg.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <Image
          source={require("../assets/images/idpng.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        </View>
        <View style={styles.readButton}>
        <MaterialButtonDark
          text1="Leer Cédula"
          button1="Untitled"
          style={styles.materialButtonDark1}
        ></MaterialButtonDark>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(17,34,68,1)"
  },
  header: {
    flex: 1,
    backgroundColor: "rgba(17,34,68,1)",
    flexDirection: "row"
  },
  step: {
    flex: 1,
    marginTop: "6%",
    marginBottom: "5%",
    marginRight: "-6%",
    color: "rgba(255,255,255,1)",
    opacity: 0.5,
    fontSize: 20,
    fontFamily: "roboto-regular",
  },
  lecturaDeCedula1: {
    flex: 2,
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginTop: "6%"
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    flex: 1,
    marginTop: "5%",
    marginLeft: "5%"
  },
  body: {
    flex: 9,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "column"
  },
  instructions: {
    flex: 1,
    marginTop: "10%",
    color: "rgba(0,0,0,1)",
    fontSize: 22,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    textAlign: "center",
    marginLeft: "10%",
    marginRight: "10%",
    
  },
  image: {
    width: "50%",
    height: "50%",
    margin: "5%",
    flex: 1,
  },
  imageRow: {
    flex: 6,
    flexDirection: "row",
    marginTop: 78,
    marginLeft: 32,
    marginRight: 42
  },
  readButton:{
    flex: 2,
    alignItems: "center"

  },
  materialButtonDark1: {
    width: "80%",
    height: 45,
    backgroundColor: "rgba(7,201,219,1)",
    borderRadius: 10,
  }
});

export default NfcReaderScreen;
