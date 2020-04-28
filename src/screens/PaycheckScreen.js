import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import MaterialButtonDark from "../components/MaterialButtonDark";

function PaycheckScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>1/4</Text>
        <Text style={styles.reciboDeSueldo}>Recibo de Sueldo</Text>
        <Icon name="cross" style={styles.icon1}></Icon>
      </View>
      <View style={styles.rect2}>
        <View style={styles.rect3}>
          <Text style={styles.loremIpsum2}>
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
  rect: {
    height: 81,
    backgroundColor: "rgba(17,34,68,1)",
    alignSelf: "stretch",
    flexDirection: "row"
  },
  loremIpsum: {
    flex: 0,
    color: "rgba(255,255,255,1)",
    opacity: 0.5,
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    marginRight: -230,
    marginTop: 30
  },
  reciboDeSueldo: {
    width: 154,
    height: 20,
    flex: 0,
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    marginLeft: 103,
    marginTop: 37
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    flex: 0,
    marginLeft: -240,
    marginTop: 33
  },
  rect2: {
    top: 81,
    left: 0,
    height: 659,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0
  },
  rect3: {
    height: 84,
    backgroundColor: "rgba(230, 230, 230,1)",
    opacity: 0.5
  },
  loremIpsum2: {
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    marginTop: 12,
    marginLeft: 13
  },
  image: {
    width: 65,
    height: 37,
    marginTop: 1,
    marginLeft: 147
  },
  materialButtonDark1: {
    width: 121,
    height: 55,
    backgroundColor: "rgba(7,201,219,1)",
    borderRadius: 10,
    marginTop: 437,
    marginLeft: 119
  }
});

export default PaycheckScreen;
