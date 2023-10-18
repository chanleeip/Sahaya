import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';

const Searchbar=()=>{

return (
  <View style={styles.view}>
    <SearchBar
    />
  </View>
);
};

const styles = StyleSheet.create({
view: {
  margin: 10,
},
});

export default Searchbar;