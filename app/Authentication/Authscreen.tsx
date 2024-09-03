import React, { useState } from "react";
import { Alert, ScrollView, ToastAndroid } from "react-native";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";

export default function AuthScreen() {
  const navigation = useNavigation();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://172.16.102.209:3000/login", {
        email,
        password,
      });
      ToastAndroid.show("Successfully logged in!", ToastAndroid.SHORT);
      // navigation.navigate("Authentication/details");
    } catch (error) {
      Alert.alert("Error", "Failed to log in");
      console.error("Error logging in:", error.response ? error.response.data : error.message);
    }
  };

  const handleRegister = async () => {
    if (password !== confpassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://172.16.102.209:3000/register", {
        name,
        phone,
        email,
        password,
      });
      ToastAndroid.show("Successfully registered!", ToastAndroid.SHORT);
      setTimeout(() => {
        //router.replace('handleLogin')
      }, 1000);
    } catch (error) {
      Alert.alert("Error", "Failed to register user");
      console.error("Error registering user:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/bg.png")}
      style={styles.image}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>{isLogin ? "Login" : "Register"}</Text>

          {!isLogin && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone Number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
              />
            </>
          )}

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {!isLogin && (
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confpassword}
              onChangeText={setConfPassword}
              secureTextEntry
            />
          )}
          <Button
            title={isLogin ? "Login" : "Register"}
            onPress={isLogin ? handleLogin : handleRegister}
          />

          <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
            <Text style={styles.switchText}>
              {isLogin
                ? "Don’t have an account? Register"
                : "Already have an account? Login"}
            </Text>
          </TouchableOpacity>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>Login with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Text style={styles.socialButtonText}>Login with Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    margin: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  switchText: {
    color: "#007BFF",
    marginTop: 10,
  },
  socialButtonsContainer: {
    marginTop: 20,
    width: "100%",
  },
  socialButton: {
    backgroundColor: "#f4511e",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  socialButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});