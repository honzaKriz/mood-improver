import { Slider } from '@react-native-assets/slider';
import { StyleSheet, Image } from 'react-native';
import React from 'react';

function VerticalSlider({ value, setSliderValue }) {
  const SmileyThumb = () => {
    return (
      <Image
        source={require('../../assets/happy.png')}
        style={{ width: 40, height: 40 }}
      />
    );
  };

  return (
    <Slider
      style={styles.verticalSlider}
      minimumValue={1}
      maximumValue={5}
      value={value}
      step={1}
      inverted={true}
      vertical={true}
      onValueChange={setSliderValue}
      minimumTrackTintColor='green'
      maximumTrackTintColor='red'
      CustomThumb={SmileyThumb}
    />
  );
}

const styles = StyleSheet.create({
  verticalSlider: {
    height: 200,
    width: 40,
    flexGrow: 0,
    marginTop: 20,
  },
});

export default VerticalSlider;
