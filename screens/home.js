import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';

const data = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' },
    { id: '6', name: 'Item 6' },
    { id: '7', name: 'Item 7' },
    { id: '8', name: 'Item 8' },
    { id: '9', name: 'Item 9' },
    { id: '10', name: 'Item 10' },
  ];
const Home = () => {
    const [text, setText] = React.useState("");
    const renderItem = ({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      );
    return (
      <View style={styles.container}>
      <Searchbar style={styles.searchBar}
        placeholder="Recherche"
        value={text}
        onChangeText={text => setText(text)}
        mode="bar"
      />
      <Text>Items List</Text>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    </View>
    );
  
}

export default Home

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
        backgroundColor: '#f9c2ff',
        padding: 4,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 4
    },
    text: {
        fontSize: 18,
    },  
})