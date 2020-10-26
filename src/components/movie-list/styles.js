import { StyleSheet, StatusBar } from "react-native";

import { HUES } from '../../constants/design-tokens';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: HUES.BG_PAGE,
  },
  moviePoster: {
    width: 100, height: 150
  },
  movieItem: {
    marginVertical: 16,
    marginHorizontal: 16,
    flexDirection: 'row'
  },
  movieItemInfo: {
    marginLeft: 16,
    flex: 1,
    flexDirection: 'column',
  },
  movieItemTitle: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    flexShrink: 1,
    flexWrap: 'wrap'
  },
  genresList: { 
    flexDirection: "row",
    flexWrap: 'wrap'
  },
  genreItem: { 
    marginRight: 16,
    marginTop: 8
  }
});
