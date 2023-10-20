import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DropdownButton from "./components/molecules/dropdownButton";

export default function App() {
  return (
    <>
      <View style={styles.background}>
        <View style={styles.containerWhite}>
          <Text>
            So I guess that if I change this, I will see it on my phone now?
          </Text>
          <Text>BASED</Text>
          <View style={styles.button}>
            <DropdownButton text="click me"></DropdownButton>
          </View>
          <StatusBar style="auto" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  containerWhite: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 575,
    borderRadius: 15,
    paddingLeft: 35,
    paddingRight: 35,
    position: "relative",
  },
  button: {
    position: "absolute",
    right: 0,
    top: 0,
  },
});
