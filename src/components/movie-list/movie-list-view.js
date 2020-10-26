import React, { useEffect, useRef } from "react";
import { FlatList, SafeAreaView } from "react-native";

import { MovieListItemView } from './movie-list-item-view';
import { MovieListFooterView } from './movie-list-footer-view';

import { styles } from './styles';

export const MovieListView = ({ movies, page, onLoadMore}) => {

  const listRef = useRef();

  const renderItem = ({ item }) => <MovieListItemView movie={item} />

  const renderFooter = () => <MovieListFooterView onPress={onLoadMore} />

  useEffect(() => {
    if(page > 1) {
      const lastPageIndex = ((page - 1) * 20) - 1;
      listRef.current.scrollToIndex({animated: true, index : lastPageIndex});
    }
  }, [listRef, page])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={listRef}
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};
