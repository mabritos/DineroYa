import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import MaterialButtonDark from "../components/MaterialButtonDark";
import RNCamera from 'react-native-camera';

function PaycheckScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="cross" style={styles.icon1}></Icon>
        <Text style={styles.reciboDeSueldo}>Recibo de Sueldo</Text>
        <Text style={styles.currentStep}>1/4</Text>
      </View>
      <View style={styles.camera}>
        <View style={styles.instructions}>
          <Text style={styles.instructionsText}>
            Tome una foto de su recibo de sueldo
          </Text>
          <Image
            source={require("../assets/images/1340477.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
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
  header: {
    flex: 1,
    backgroundColor: "rgba(17,34,68,1)",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  currentStep: {
    marginTop: "6%",
    marginBottom: "5%",
    marginRight: "-6%",
    flex: 1,
    color: "rgba(255,255,255,1)",
    opacity: 0.5,
    fontSize: 20,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end"
  },
  reciboDeSueldo: {
    flex:2,
    marginTop: "6%",
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    height: "auto",
    fontFamily: "roboto-regular",
  },
  icon1: {
    marginTop: "5%",
    marginLeft: "5%",
    flex:1,
    color: "rgba(255,255,255,1)",
    fontSize: 30,
  },
  camera: {
    flex: 9,
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "column",
    justifyContent: 'center'
    
  },
  instructions: {
    height: "15%",
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.5
  },
  instructionsText: {
    alignSelf: "center",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    marginTop: 12
  },
  image: {
    width: 65,
    height: 37,
    alignSelf: "center"
  },
  materialButtonDark1: {
    width: 121,
    height: 55,
    backgroundColor: "rgba(7,201,219,1)",
    borderRadius: 10,
    marginTop: 462,
    alignSelf: "center"
  }
});

export default PaycheckScreen;
