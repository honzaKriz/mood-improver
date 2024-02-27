import { ReactNode } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

type BoxProps = {
  children: ReactNode;
};

function Box({ children }: BoxProps) {
  return <View style={styles.box}>{children}</View>;
}

const styles = StyleSheet.create({
  box: {
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
});

export default Box;
