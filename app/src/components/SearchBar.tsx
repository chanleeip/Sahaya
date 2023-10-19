import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const SearchBar:React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query:React.SetStateAction<string>) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      mode='bar'
      rippleColor={'green'}
      style={{borderRadius:20,backgroundColor:'white',borderWidth:1}}
    />
  );
};

export default SearchBar;
