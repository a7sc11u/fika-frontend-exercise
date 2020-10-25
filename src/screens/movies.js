import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from "react-native";

import { HUES } from '../constants/design-tokens';


const MoviesView = ({ genres }) => {

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: HUES.BG_PAGE,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: "black",
          fontSize: 30,
          marginBottom: 15,
          fontWeight: "bold",
        }}
      >
        HOME YAY
      </Text>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    movies: state.movies,
  };
}

function mapDispatchToProps(dispatch) {
  return { };
}

export const MoviesScreen = connect(mapStateToProps, mapDispatchToProps)(MoviesView);
