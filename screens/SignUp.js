import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { auth } from "../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email.trim(), password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      console.log("password did not match");
    }
    auth
      .createUserWithEmailAndPassword(email.trim(), password)
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={{ height: "100%" }}>
      <View style={styles.wrapperComponent}>
        <View>
          <Image
            style={{
              width: 260,
              height: 260,
            }}
            source={require("../assets/images/logo.png")}
          />
        </View>
        <View style={styles.flexButton}>
          <TouchableOpacity
            onPress={() => setIsLogin(true)}
            style={isLogin ? styles.darkButton : styles.lightButton}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setIsLogin(false)}
            style={isLogin ? styles.lightButton : styles.darkButton}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          height: "50%",
          backgroundColor: "#FEBB01",
          borderTopStartRadius: 80,
          borderTopRightRadius: 80,
        }}
      >
        {isLogin ? (
          <KeyboardAwareScrollView behavior="padding">
            <KeyboardAvoidingView style={styles.container} behavior="padding">
              <View style={styles.inputContainer}>
                <Text>Email</Text>
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={styles.input}
                />
                <Text>Password</Text>
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  style={styles.input}
                  secureTextEntry
                />
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={handleLogin}
                  style={styles.loginButton}
                >
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </KeyboardAwareScrollView>
        ) : (
          <KeyboardAwareScrollView behavior="padding">
            <KeyboardAvoidingView style={styles.container} behavior="padding">
              <View style={styles.inputContainer}>
                <Text>Email</Text>
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={styles.input}
                />
                <Text>Password</Text>
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  style={styles.input}
                  secureTextEntry
                />
                <Text>Confirm password</Text>

                <TextInput
                  placeholder="Confirn password"
                  value={confirmPassword}
                  onChangeText={(text) => setConfirmPassword(text)}
                  style={styles.input}
                  secureTextEntry
                />
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={handleSignUp}
                  style={styles.loginButton}
                >
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </KeyboardAwareScrollView>
        )}
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  wrapperComponent: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEBB01",
    borderRadius: 20,
    height: "100%",
  },
  inputContainer: {
    width: "80%",
    paddingTop: 15,
    paddingBottom: 30,
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  darkButton: {
    backgroundColor: "#FEBB01",
    width: "45%",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  lightButton: {
    backgroundColor: "rgba(255, 189, 1, 0.4);",
    width: "45%",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#81693F",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  flexButton: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
  },
});
