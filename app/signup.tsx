import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("@/assets/images/hopelogo.png")}
            style={styles.imgLogo}
            resizeMode="contain"
          />
        </View>

        {/* Title */}
        <Text style={styles.title}>Create Account</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Password Confirm Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* SignUp Button */}
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>SignUp</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
        </View>

        {/* Or signup with */}
        <Text style={styles.orText}>Or signup with</Text>

        {/* Social Icons */}
        <View style={styles.socialContainer}>
          {/* Google */}
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.googleG}>G</Text>
          </TouchableOpacity>

          {/* Facebook */}
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={26} color="#1877F2" />
          </TouchableOpacity>

          {/* X (Twitter) */}
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.xIcon}>𝕏</Text>
          </TouchableOpacity>
        </View>

        {/* SignUp Link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/signin")} >
            <Text style={styles.signUpLink}>SignIn</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 30,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  imgLogo: {
    width: 180,
    height: 140,
  },
  title: {
    fontSize: 22,
    fontFamily: "Krub_700Bold",
    color: "#1a1a1a",
    marginBottom: 25,
  },
  inputContainer: {
    marginBottom: 15,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 14,
    fontSize: 15,
    fontFamily: "Krub_400Regular",
    color: "#333",
    backgroundColor: "#fff",
  },
  forgetPasswordContainer: {
    alignItems: "flex-end",
    marginBottom: 25,
  },
  forgetPasswordText: {
    color: "#5B21B6",
    fontSize: 13,
    fontFamily: "Krub_400Regular",
  },
  signupButton: {
    backgroundColor: "#5B21B6",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 25,
    shadowColor: "#5B21B6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "Krub_700Bold",
  },
  dividerContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  dividerLine: {
    width: "80%",
    height: 1,
    backgroundColor: "#e0e0e0",
  },
  orText: {
    textAlign: "center",
    color: "#888",
    fontSize: 14,
    fontFamily: "Krub_400Regular",
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 18,
    marginBottom: 40,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  googleG: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#EA4335",
  },
  xIcon: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
  },
  signUpText: {
    color: "#666",
    fontSize: 14,
    fontFamily: "Krub_400Regular",
  },
  signUpLink: {
    color: "#5B21B6",
    fontSize: 14,
    fontFamily: "Krub_700Bold",
  },
});