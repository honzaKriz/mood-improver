import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DropdownButton from './components/molecules/DropdownButton';
import DropdownMenu from './components/organisms/DropdownMenu';
import { useState } from 'react';

export default function App() {
  let [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <View style={styles.background}>
        <View style={styles.containerWhite}>
          <Text>
            So I guess that if I change this, I will see it on my phone now?
          </Text>
          <Text>BASED</Text>
          <View style={styles.button}>
            <DropdownButton
              text='click me'
              toggleIsOpen={toggleIsOpen}
              isOpen={isOpen}
            ></DropdownButton>
            {isOpen && <DropdownMenu />}
          </View>
          <StatusBar style='auto' />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWhite: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 575,
    borderRadius: 15,
    paddingLeft: 35,
    paddingRight: 35,
    position: 'relative',
  },
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
