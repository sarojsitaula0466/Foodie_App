import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.link}>
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Text>About us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Contact")}>
          <Text>Contact</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logo}>
        <Image
          style={{
            width: 260,
            height: 260,
          }}
          source={require("../assets/images/logo.png")}
        />
      </View>
      <View style={styles.text}>
        <Text style={styles.aboutText}>Satisfy your craving!</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.bodyText}>Welcome to your burgers paradise!</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    padding: 0,
  },
  link: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",

    width: "100%",
    position: "absolute",
    top: 50,
    paddingLeft: 20,
    paddingRight: 20,
    //backgroundColor: "red",
  },
  logo: {
    paddingTop: 20,
    height: "35%",
  },
  text: {
    paddingBottom: 20,

    height: "15%",
  },
  aboutText: {
    fontSize: 36,
    fontWeight: "700",
  },
  body: {
    backgroundColor: "#FEBB01",
    height: "50%",
    width: "100%",
    borderTopStartRadius: 80,
    borderTopRightRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    /*    paddingLeft: 40,
    paddingRight: 40,
    position: "relative", */
  },
  bodyText: {
    fontSize: 40,

    alignItems: "center",
    color: "#81693F",
    /*  position: "absolute",
    top: 60, */
  },
});
