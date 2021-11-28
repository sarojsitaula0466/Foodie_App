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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.icon}>
        <TouchableOpacity
          style={{ height: 40, width: 40 }}
          onPress={() => navigation.navigate("SplashScreen")}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
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
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
    padding: 0,
  },
  icon: {
    justifyContent: "center",
    alignItems: "flex-start",
    position: "absolute",
    left: 20,
    height: "15%",
    width: 40,
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
