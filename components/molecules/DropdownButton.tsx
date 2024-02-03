import { StyleSheet, View } from 'react-native';

type DropdownButtonProps = {
  text: string;
  isOpen: boolean;
  toggleIsOpen: () => void;
};

export default function DropdownButton({
  isOpen,
  toggleIsOpen,
}: DropdownButtonProps) {
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
    justifyContent: 'space-between',
    padding: 12,
    backgroundColor: 'lightgrey',
    margin: 8,
    borderRadius: 10,
  },
  horizontalLine: {
    height: 5,
    backgroundColor: 'black',
  },
});
