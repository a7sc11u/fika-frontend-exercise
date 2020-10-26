import { StyleSheet, StatusBar } from "react-native";

import { HUES } from '../../constants/design-tokens';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: HUES.BG_PAGE,
  },
  item: {
    marginVertical: 12,
    marginHorizontal: 16,
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 32,
  },
});
