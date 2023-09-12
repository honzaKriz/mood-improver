import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.containerBlue}>
        <Text>
          So I guess that if I change this, I will see it on my phone now?
        </Text>
        <Text>BASED</Text>
        <Button title="button is easy"></Button>
        <StatusBar style="auto" />
      </View>
      <View style={styles.containerRed}></View>
    </>
  );
}

const styles = StyleSheet.create({
  containerBlue: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  containerRed: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
