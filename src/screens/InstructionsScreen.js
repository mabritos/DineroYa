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
        <View style={styles.icon1Row}>
          <Icon name="cross" style={styles.icon1}></Icon>
          <Image
            source={require("../assets/images/credihappy-prestamos3.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
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
  soloUnosPasosMas1: {
    width: 236,
    height: 30,
    color: "rgba(0,0,30,1)",
    fontSize: 24,
    fontFamily: "roboto-700",
    lineHeight: 30,
    marginTop: 78,
    marginLeft: 62
  },
  loremIpsum1: {
    width: 288,
    height: 148,
    color: "rgba(0,0,30,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    textAlign: "center",
    marginTop: 42,
    marginLeft: 36
  },
  materialButtonDark2: {
    width: 294,
    height: 45,
    backgroundColor: "rgba(7,201,219,1)",
    borderRadius: 10,
    marginTop: 77,
    marginLeft: 33
  },
  rect3: {
    width: 360,
    height: 185,
    backgroundColor: "rgba(17,34,68,1)",
    flexDirection: "row"
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    flex: 0
  },
  image1: {
    width: 200,
    height: 200,
    marginLeft: 33,
    marginTop: 9
  },
  icon1Row: {
    height: 209,
    flexDirection: "row",
    flex: 1,
    marginRight: 80,
    marginLeft: 17,
    marginTop: 33
  }
});

export default InstructionsScreen;
