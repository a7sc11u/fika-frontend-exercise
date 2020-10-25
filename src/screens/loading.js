import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, View } from "react-native";

import { MOVIES_ROUTE } from '../constants/navigation';
import { HUES } from '../constants/design-tokens';

import { setGenres } from '../modules/genres';

const LoadingScreenView = ({ genres, setGenres, navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      setGenres({
        123: 'kids'
      })
    }, 1000)
  }, [setGenres])

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(MOVIES_ROUTE)
    }, 4000)
  }, [genres])

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

export const LoadingScreen = connect(mapStateToProps, mapDispatchToProps)(LoadingScreenView);
