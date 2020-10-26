import React from "react";
import { 
  FlatList, 
  SafeAreaView, 
  Text, 
  View 
} from "react-native";

import { styles } from './styles';


const MovieListItemView = ({ movie }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{movie.title}</Text>
      <View style={styles.genreList}>
        {movie.genres.map(genre => (
          <Text style={styles.genreItem} key={`${genre.id}`}>
            {genre.name}
          </Text>
        ))}
      </View>
    </View>
  )
};

export const MovieListView = ({ movies }) => {

  const renderItem = ({ item }) => <MovieListItemView movie={item} />

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
