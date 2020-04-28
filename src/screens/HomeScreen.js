import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";
import { Center } from "@builderx/utils";
import MaterialButtonDark from "../components/MaterialButtonDark";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Center horizontal>
        <View style={styles.rect2}>
          <Text style={styles.monto1}>Monto</Text>
          <TextInput
            placeholder="Ingrese el Monto en Pesos ($)"
            style={styles.textInput1}
          ></TextInput>
          <Text style={styles.cantidadDeCuotas1}>Cantidad de Cuotas</Text>
          <TextInput
            placeholder="Ingrese la cantidad de Cuotas"
            style={styles.textInput2}
          ></TextInput>
          <MaterialButtonDark
            text1="Solicitar Préstamo"
            button1="Untitled"
            style={styles.materialButtonDark1}
          ></MaterialButtonDark>
          <Text style={styles.misPrestamos1}>Mis préstamos</Text>
        </View>
      </Center>
      <View style={styles.rect3}>
        <Image
          source={require("../assets/images/credihappy-prestamos3.png")}
          resizeMode="contain"
          style={styles.image}
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
    top: 185,
    width: 360,
    height: 555,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute"
  },
  monto1: {
    width: 63,
    height: 16,
    flex: 0.03,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-500",
    marginTop: 103,
    marginLeft: 30
  },
  textInput1: {
    width: 299,
    height: 54,
    flex: 0.03,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 0,
    borderStyle: "solid",
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 13,
    marginLeft: 33
  },
  cantidadDeCuotas1: {
    width: 188,
    height: 16,
    flex: 0.03,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-500",
    marginTop: 28,
    marginLeft: 30
  },
  textInput2: {
    width: 299,
    height: 57,
    flex: 0.03,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 0,
    borderStyle: "solid",
    fontFamily: "roboto-regular",
    textAlign: "center",
    marginTop: 19,
    marginLeft: 33
  },
  materialButtonDark1: {
    width: 294,
    height: 45,
    flex: 0.03,
    backgroundColor: "rgba(7,201,219,1)",
    borderRadius: 10,
    marginTop: 52,
    marginLeft: 33
  },
  misPrestamos1: {
    width: 106,
    height: 16,
    flex: 0.03,
    color: "rgba(0,0,30,1)",
    opacity: 0.79,
    fontSize: 16,
    fontFamily: "roboto-regular",
    textDecorationLine: "underline",
    marginTop: 45,
    marginLeft: 127
  },
  rect3: {
    height: 185,
    backgroundColor: "rgba(17,34,68,1)",
    alignSelf: "stretch"
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 42,
    alignSelf: "center"
  }
});

export default HomeScreen;
