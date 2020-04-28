import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";
import MaterialButtonDark from "../components/MaterialButtonDark";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
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
    position: "relative",
    top: "25%",
    backgroundColor: "rgba(255,255,255,1)",
    height: "75%",
    width: "100%"
  },
  monto1: {
    width: "auto",
    height: "auto",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-500",
    marginTop: "20%",
    marginLeft: "10%"
  },
  textInput1: {
    alignSelf: "center",
    width: "80%",
    height: 50,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 0,
    borderStyle: "solid",
    fontFamily: "roboto-regular",
    textAlign: "center",
  },
  cantidadDeCuotas1: {
    width: "auto",
    height: "auto",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "roboto-500",
    marginTop: "15%",
    marginLeft: "10%"
  },
  textInput2: {
    alignSelf: "center",
    width: "80%",
    height: 50,
    backgroundColor: "rgba(230, 230, 230,1)",
    color: "#121212",
    borderRadius: 10,
    borderColor: "rgba(0,0,0,1)",
    borderWidth: 0,
    borderStyle: "solid",
    fontFamily: "roboto-regular",
    textAlign: "center",
  },
  materialButtonDark1: {
    alignSelf: "center",
    width: "80%",
    marginTop: "15%",
    height: 45,
    backgroundColor: "rgba(7,201,219,1)",
    borderRadius: 10,
    
  },
  misPrestamos1: {
    alignSelf: "center",
    width: "auto",
    height: "auto",
    color: "rgba(0,0,30,1)",
    opacity: 0.70,
    fontSize: 16,
    fontFamily: "roboto-regular",
    textDecorationLine: "underline",
    marginTop: 49,
    
  },
  rect3: {
    height: "25%",
    width: "100%",
    position: "absolute",
    backgroundColor: "rgba(17,34,68,1)",
    alignItems: "center"
  },
  image: {
    width: "100%",
    height: "100%",
    marginTop: "10%"
  }
});

export default HomeScreen;
