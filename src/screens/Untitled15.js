import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialSpinner2 from "../components/MaterialSpinner2";
import Icon from "react-native-vector-icons/Entypo";

function Untitled15(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <Text style={styles.loremIpsum}>
          Su solicitud de préstamo está siendo procesada{"\n"}
          {"\n"}Por favor aguarde unos segundos
        </Text>
        <MaterialSpinner2 style={styles.materialSpinner2}></MaterialSpinner2>
      </View>
      <View style={styles.rect3}>
        <View style={styles.procesandoRow}>
          <Text style={styles.procesando}>Procesando</Text>
          <Icon name="cross" style={styles.icon1}></Icon>
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
    top: 83,
    left: 0,
    height: 657,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0
  },
  loremIpsum: {
    width: 292,
    height: 131,
    color: "#121212",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    textAlign: "center",
    marginTop: 121,
    marginLeft: 35
  },
  materialSpinner2: {
    width: 61,
    height: 64,
    marginTop: 101,
    marginLeft: 153
  },
  rect3: {
    width: 360,
    height: 83,
    backgroundColor: "rgba(17,34,68,1)",
    flexDirection: "row"
  },
  procesando: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-700",
    lineHeight: 30,
    marginLeft: 99
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    flex: 0,
    marginLeft: -217
  },
  procesandoRow: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 126,
    marginLeft: 17,
    marginTop: 33
  }
});

export default Untitled15;
