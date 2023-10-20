import CustomButton from "../atoms/Button";
import { StyleSheet, View } from "react-native";

type DropdownButtonProps = {
  text: string;
};

export default function DropdownButton({ text }: DropdownButtonProps) {
  return (
    <View style={styles.dropdownButton}>
      <CustomButton text={text} />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownButton: {
    height: 50,
    width: 50,
  },
});
