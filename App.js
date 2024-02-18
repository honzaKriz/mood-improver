import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import DropdownButton from './components/molecules/DropdownButton';
import DropdownMenu from './components/organisms/DropdownMenu';
import VerticalSlider from './components/molecules/VerticalSlider';
import { useState } from 'react';

const screenWidth = Dimensions.get('window').width;

export default function App() {
  let [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <View style={styles.background}>
        <View style={styles.containerWhite}>
          <Text>How are you feeling today?</Text>
          <View style={styles.button}>
            <DropdownButton
              text='click me'
              toggleIsOpen={toggleIsOpen}
              isOpen={isOpen}
            ></DropdownButton>
            {isOpen && <DropdownMenu />}
          </View>
          <View>
            <VerticalSlider></VerticalSlider>
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
    width: screenWidth * 0.9,
  },
  button: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
