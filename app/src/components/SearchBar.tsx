import * as React from 'react';
import { Searchbar } from 'react-native-paper';


const SearchBar:React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query:React.SetStateAction<string>) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      mode='bar'
      rippleColor={'red'}
    />
  );
};

export default SearchBar;
