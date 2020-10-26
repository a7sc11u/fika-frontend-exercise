import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import { styles } from './styles';

export const MovieListFooterView = ({ onPress }) => {
  return (
    <View style={{padding:16}}>
      <TouchableOpacity style={styles.footerButton} onPress={onPress}>
          <Text style={styles.footerButtonLabel}>Load More</Text>
      </TouchableOpacity>
    </View>
  )
}