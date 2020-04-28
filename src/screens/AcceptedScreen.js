import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from "react-native";
import { Center } from "@builderx/utils";
import MaterialButtonDark from "../components/MaterialButtonDark";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function AcceptedScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect3}>
        <View style={styles.icon1Row}>
          <EntypoIcon name="cross" style={styles.icon1}></EntypoIcon>
          <Image 
            source={require("../assets/images/check.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.title}>
          <Text style={styles.prestamoAceptado}>Préstamo Aceptado</Text>
        </View>
        
      </View>
      <View style={styles.body}>
            <Text style={styles.loremIpsum}>
              Presente el siguiente QR en su RedPagos más cercano
            </Text>
            <View style={styles.qrView}>

            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>
                  Mis Préstamos
                </Text>
              </TouchableOpacity>
            </View>
          
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  body: {
    flex: 3,
    backgroundColor: "rgba(255,255,255,1)",
    alignItems: "center",
    flexDirection: "column"
  },
  loremIpsum: {
    width: "80%",
    flex: 1,
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    textAlign: "center", 
    marginTop: "15%"
  },
  buttonStyle: {
    height: 45,
    width: "100%",
    backgroundColor: "rgba(7,201,219,1)",
    borderRadius: 10,
    shadowRadius: 10,

  },
  rect3: {
    flex: 1,
    backgroundColor: "rgba(17,34,68,1)"
  },
  prestamoAceptado: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-700",
    lineHeight: 30,
    alignSelf: "center"
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginTop: "5%",
    marginLeft: "5%"
  },
  icon1Row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    marginTop: "10%"
  },
  title: {
    marginTop: "15%",
    flex: 1
  },
  buttonContainer:{
    flex: 1,
    flexDirection: "column",
    alignItems: "center",

  },
  qrView: {
    flex:1
  },
  buttonTextStyle: {
    color: "rgba(255,255,255,1)",
    fontFamily: "roboto-700",
    padding: 10,
    fontSize: 18
    
  }
});

export default AcceptedScreen;
