import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

function ProcessingScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.procesando}>Procesando</Text>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.loremIpsum}>
          Su solicitud de préstamo está siendo procesada
        </Text>
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator>
        </View>
        <Text style={styles.loremIpsum1}>
          Por favor aguarde unos segundos
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect2: {
    flex: 9,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,1)",
  },
  loremIpsum: {
    marginTop: "20%",
    flex: 2,
    width: "80%",
    height: "auto",
    color: "#121212",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    textAlign: "center",
    
  },
  loremIpsum1: {
    flex: 2,
    width: "80%",
    height: "auto",
    color: "#121212",
    fontSize: 24,
    fontFamily: "roboto-regular",
    lineHeight: 30,
    textAlign: "center",
    
  },
  activityIndicator: {
    flex: 1
  },
  header: {
    flex: 1,
    backgroundColor: "rgba(17,34,68,1)",
    flexDirection: "column"
  },
  procesando: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-700",
    alignSelf: "center",
    marginTop: "6%"
  },
});

export default ProcessingScreen;
