import type {PropsWithChildren} from 'react';

import {View, Text, StyleSheet} from 'react-native';
type IconsProps = PropsWithChildren<{
  name: string;
}>;

const Icons = ({name}: IconsProps) => {
  switch (name) {
    case 'circle':
      return (
        <View>
          <Text style={styles.container}>O</Text>
        </View>
      );
      break;

    case 'cross':
      return (
        <View>
          <Text style={styles.container}>X</Text>
        </View>
      );
      break;

    default:
      return (
        <View>
          <Text style={styles.container}>-</Text>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    fontSize: 40,
  },
});

export default Icons;
