import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import MaterialButtonDark from "../components/MaterialButtonDark";
import Icon from "react-native-vector-icons/Entypo";

function InstructionsScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <Text style={styles.soloUnosPasosMas1}>Solo unos pasos más!</Text>
        <Text style={styles.loremIpsum1}>
          Los siguientes pasos nos ayudarán a verificar su identidad{"\n"}
          {"\n"}Porfavor tenga su último recibo de sueldo y cédula a mano
        </Text>
        <MaterialButtonDark
          text1="Siguiente"
          button1="Untitled"
          style={styles.materialButtonDark2}
        ></MaterialButtonDark>
      </View>
      <View style={styles.rect3}>
      <Icon name="cross" style={styles.icon1}></Icon>
          <Image
            source={require("../assets/images/credihappy-prestamos3.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect2: {
    top: "25%",
    height: "75%",
    backgroundColor: "rgba(255,255,255,1)",
    position: "relative",
    alignItems: "center"
  },
  soloUnosPasosMas1: {
    textAlign: "center",
    width: "80%",
    height: "auto",
    color: "rgba(0,0,30,1)",
    fontSize: 24,
    fontFamily: "roboto-700",
    lineHeight: 30,
    marginTop: "20%"
   
  },
  loremIpsum1: {
    width: "80%",
    height: "auto",
    color: "rgba(0,0,30,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    textAlign: "center",
    marginTop: "10%"
  },
  materialButtonDark2: {
    width: "80%",
    height: 45,
    backgroundColor: "rgba(7,201,219,1)",
    borderRadius: 10,
    marginTop: "20%"
  },
  rect3: {
    width: "100%",
    height: "25%",
    backgroundColor: "rgba(17,34,68,1)",
    position: "absolute"
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: "10%",
    marginTop: "10%"
  },
  image1: {
    width: "100%",
    height: "100%",
    position: "absolute",
    marginTop: "10%"
  }
});

export default InstructionsScreen;
