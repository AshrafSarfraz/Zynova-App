import React from 'react';
import { View } from 'react-native';
import styles from './style';

const Spacer = ({  height, isDefault, isSmall, isThiny, isDefaultDouble, isCustome }) => {
  return(
  <View
    style={[
      isDefault && styles.isDefault,
      isSmall && styles.isSmall,
      isThiny && styles.isThiny,
      isDefaultDouble && styles.isDefaultDouble,
      isCustome && { height: height },
    ]}
  />)
}
export default Spacer
