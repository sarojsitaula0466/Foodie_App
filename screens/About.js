import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";


const About = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <Image
          style={{
            width: 260,
            height: 260,
          }}
          source={require("../assets/images/logo.png")}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.aboutText}>About Us</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          We provides the fresh-est of fresh-est burger in the world since 2021.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    padding: 0,
  },
  text: {
    paddingBottom: 20,
  },
  aboutText: {
    fontSize: 36,
    fontWeight: "700",
  },
  body: {
    backgroundColor: "#FEBB01",
    height: 500,
    width: 400,
    borderRadius: 120,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
    position: "relative",
  },
  bodyText: {
    fontSize: 30,

    alignItems: "center",
    color: "#81693F",
    position: "absolute",
    top: 60,
  },
});
