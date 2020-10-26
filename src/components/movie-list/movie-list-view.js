import React from "react";
import { FlatList, SafeAreaView } from "react-native";

import { MovieListItemView } from './movie-list-item-view';

import { styles } from './styles';

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
