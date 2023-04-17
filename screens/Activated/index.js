import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Activated = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your account has been activated!</Text>

      <Text style={styles.message}>Thank you for using our application.</Text>
      <Text style={styles.message}>You can now log in.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Activated;
