import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View } from "react-native";

import { setGenres } from '../modules/genres';

const MainScreenView = ({ genres, setGenres }) => {

  useEffect(() => {
    setTimeout(() => {
      setGenres({
        123: 'kids'
      })
    }, 1000)
  }, [setGenres])

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "plum",
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
        {JSON.stringify(genres)}
      </Text>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    genres: state.genres,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setGenres: (value) => dispatch(setGenres(value)),
  };
}

export const MainScreen = connect(mapStateToProps, mapDispatchToProps)(MainScreenView);
