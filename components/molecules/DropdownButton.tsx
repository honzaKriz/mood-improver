import { useState } from "react";
import { StyleSheet, View } from "react-native";

type DropdownButtonProps = {
  text: string;
};

export default function DropdownButton({}: DropdownButtonProps) {
  let [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen((prevState) => !prevState);
  }

  // TODO: create dropdown menu and set the class based on the click
  // function showDropdown() {}

  return (
    <View style={styles.dropdownButton} onTouchEnd={toggleIsOpen}>
      <View style={styles.horizontalLine}></View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.horizontalLine}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownButton: {
    height: 50,
    width: 50,
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "lightgrey",
    margin: 8,
    borderRadius: 10,
  },
  horizontalLine: {
    height: 5,
    backgroundColor: "black",
  },
});
