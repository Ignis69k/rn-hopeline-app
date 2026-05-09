import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/signin");
    }, 3000);
    return () => clearTimeout(timer)
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/hopelogo.png")} style={styles.imgLogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e9e4f2ff",
  },
  imgLogo:{
    width:250,
    height:250,
    borderWidth: 2,
    borderColor: "#a11bdfff",
  }
});