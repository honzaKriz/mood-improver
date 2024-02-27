import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DropdownButton from './components/molecules/DropdownButton';
import DropdownMenu from './components/organisms/DropdownMenu';
import VerticalSlider from './components/molecules/VerticalSlider';
import Box from './components/atoms/Box';
import Button from './components/atoms/Button';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  let [isOpen, setIsOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [currentTime, setCurrentTime] = useState(null);

  const toggleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const getCurrentTimeStamp = () => {
    const now = new Date();
    const timeString = now.toLocaleDateString();
    setCurrentTime(timeString);
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('my-key', value);
    } catch (e) {
      ("Couldn't save to database");
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('my-key');
      if (value !== null) {
        return value;
      }
    } catch (e) {
      ("Couldn't read from database");
    }
  };

  return (
    <>
      <View style={styles.background}>
        <Box>
          <Text>How are you feeling today?</Text>
          <View style={styles.dropdownButton}>
            <DropdownButton
              text='click me'
              toggleIsOpen={toggleIsOpen}
              isOpen={isOpen}
            ></DropdownButton>
            {isOpen && <DropdownMenu />}
          </View>
          <View>
            <VerticalSlider
              value={sliderValue}
              setSliderValue={setSliderValue}
            ></VerticalSlider>
          </View>
          {sliderValue ? (
            <Button
              text='SAVE'
              buttonStyle={styles.saveButton}
              onPress={getCurrentTimeStamp}
            ></Button>
          ) : null}
          {currentTime ? <Text>{currentTime}</Text> : null}
          <StatusBar style='auto' />
        </Box>
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
  dropdownButton: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  saveButton: {
    marginTop: 25,
  },
});
