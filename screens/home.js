import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Searchbar, Divider } from 'react-native-paper';

const data = [
  { id: '1', name: 'Item 1', field1: 'Field 1 Value 1', field2: 'Field 2 Value 1', field3: 'Field 3 Value 1' },
  { id: '2', name: 'Item 2', field1: 'Field 1 Value 2', field2: 'Field 2 Value 2', field3: 'Field 3 Value 2' },
  { id: '3', name: 'Item 3', field1: 'Field 1 Value 3', field2: 'Field 2 Value 3', field3: 'Field 3 Value 3' },
  { id: '4', name: 'Item 4', field1: 'Field 1 Value 4', field2: 'Field 2 Value 4', field3: 'Field 3 Value 4' },
  { id: '5', name: 'Item 5', field1: 'Field 1 Value 5', field2: 'Field 2 Value 5', field3: 'Field 3 Value 5' },
  { id: '6', name: 'Item 6', field1: 'Field 1 Value 6', field2: 'Field 2 Value 6', field3: 'Field 3 Value 6' },
  { id: '7', name: 'Item 7', field1: 'Field 1 Value 7', field2: 'Field 2 Value 7', field3: 'Field 3 Value 7' },
  { id: '8', name: 'Item 8', field1: 'Field 1 Value 8', field2: 'Field 2 Value 8', field3: 'Field 3 Value 8' },
  { id: '9', name: 'Item 9', field1: 'Field 1 Value 9', field2: 'Field 2 Value 9', field3: 'Field 3 Value 9' },
  { id: '10', name: 'Item 10', field1: 'Field 1 Value 10', field2: 'Field 2 Value 10', field3: 'Field 3 Value 10' },
];

const Home = () => {
  const [text, setText] = React.useState('');
  const [expandedItem, setExpandedItem] = useState(null);
    console.log('----->',expandedItem)
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => setExpandedItem(item.id === expandedItem ? null : item.id)}
    >
      <Text style={styles.text}>{item.name}</Text>
      {expandedItem === item.id && (
        <>
          <Text style={styles.text}>{item.field1}</Text>
          <Text style={styles.text}>{item.field2}</Text>
          <Text style={styles.text}>{item.field3}</Text>
        </>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Searchbar
        style={styles.searchBar}
        placeholder="Recherche"
        value={text}
        onChangeText={(text) => setText(text)}
        mode="bar"
      />
      <Text>Items List</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBar: {
    width: '90%',
    height: 'auto',
  },
  item: {
    backgroundColor: '#ACE1AF',
    padding: 4,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
  },
  text: {
    fontSize: 18,
  },
});