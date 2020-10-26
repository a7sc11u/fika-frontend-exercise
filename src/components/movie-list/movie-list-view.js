import React, { useEffect, useRef } from "react";
import { FlatList, SafeAreaView } from "react-native";

import { MovieListItemView } from './movie-list-item-view';
import { MovieListFooterView } from './movie-list-footer-view';

import { styles } from './styles';

const PAGE_SIZE = 20;

export const MovieListView = ({ movies, page, totalPages, onLoadMore}) => {

  const listRef = useRef();

  const renderItem = ({ item }) => <MovieListItemView movie={item} />

  const renderFooter = () => page <= totalPages ? <MovieListFooterView onPress={onLoadMore} /> : null

  useEffect(() => {
    if(page > 1) {
      const lastPageIndex = ((page - 1) * PAGE_SIZE);
      listRef.current.scrollToIndex({animated: true, index : lastPageIndex});
    }
  }, [listRef, page])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={listRef}
        onScrollToIndexFailed={()=>{}}
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => `${item.id}`}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};
