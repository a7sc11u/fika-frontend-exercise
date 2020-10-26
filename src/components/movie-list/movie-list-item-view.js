import React from "react";
import { Text, View } from "react-native";

import { styles } from './styles';


export const MovieListItemView = ({ movie }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{movie.title}</Text>
      <View style={styles.genresList}>
        {movie.genres.map(genre => (
          <Text style={styles.genreItem} key={`${genre.id}`}>
            {genre.name}
          </Text>
        ))}
      </View>
    </View>
  )
};
