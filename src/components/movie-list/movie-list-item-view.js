import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from './styles';


export const MovieListItemView = ({ movie }) => {
  return (
    <View style={styles.movieItem}>
      <Image
        style={styles.moviePoster}
        source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
      />
      <View style={styles.movieItemInfo}>
        <Text style={styles.movieItemTitle}>{movie.title}</Text>
        <View style={styles.genresList}>
          {movie.genres.map(genre => (
            <Text style={styles.genreItem} key={`${genre.id}`}>
              {genre.name}
            </Text>
          ))}
        </View>
      </View>
    </View>
  )
};
