import React from "react";
import { 
  FlatList, 
  SafeAreaView, 
  Text, 
  View 
} from "react-native";

import { styles } from './styles';


const MovieListItem = ({ movie }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{movie.title}</Text>
      <View style={styles.genresList}>
        {movie.genres.map(genre => (
          <Text style={styles.genreItem}>
            {genre.name}
          </Text>
        ))}
      </View>
    </View>
  )
};

export const MovieList = ({ movies }) => {

  const renderItem = ({ item }) => <MovieListItem movie={item} />

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
      />
    </SafeAreaView>
  );
};
