import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function MyLoansScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect2}>
        <View style={styles.scrollArea}>
          <ScrollView
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          ></ScrollView>
        </View>
      </View>
      <View style={styles.rect3}>
        <View style={styles.icon1Row}>
          <Icon name="cross" style={styles.icon1}></Icon>
          <Text style={styles.misPrestamos}>Mis Préstamos</Text>
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
    top: 93,
    left: 0,
    height: 647,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0
  },
  scrollArea: {
    width: 284,
    height: 561,
    backgroundColor: "rgba(230, 230, 230,1)",
    borderRadius: 10,
    marginTop: 38,
    marginLeft: 38
  },
  scrollArea_contentContainerStyle: {
    width: 274,
    height: 310
  },
  rect3: {
    width: 360,
    height: 93,
    backgroundColor: "rgba(17,34,68,1)",
    flexDirection: "row"
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    flex: 0
  },
  misPrestamos: {
    width: 177,
    height: 30,
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    fontFamily: "roboto-700",
    lineHeight: 30,
    marginLeft: 45
  },
  icon1Row: {
    height: 30,
    flexDirection: "row",
    flex: 1,
    marginRight: 91,
    marginLeft: 17,
    marginTop: 33
  }
});

export default MyLoansScreen;
