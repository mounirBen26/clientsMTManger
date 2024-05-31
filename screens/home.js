import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Searchbar, Divider,IconButton } from 'react-native-paper';
import { Dimensions } from 'react-native';
import AboutSvg from './aboutSvg';
import { WaveIndicator,BallIndicator} from 'react-native-indicators';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Home = ({navigation}) => {
  const [text, setText] = React.useState('');
  const [expandedItem, setExpandedItem] = useState(null);
  const [clients, setClients] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientsCollection = collection(db, 'clientsdb');
        const querySnapshot = await getDocs(clientsCollection);
        const clientsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setClients(clientsData);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching clients:', error);
        setIsLoading(false);
      }
    };
    fetchClients();
  }, []);
  function handleItemPress(item) {
    navigation.navigate('updateItem', { item });
  }

  function resetSearchInput() {
    setSearchText('');
  }
  const filteredClients = clients.filter((client) =>
    client.Num_contrat !== undefined &&
    client.intitule !== undefined &&
    client.Num_compteur !== undefined &&
    (client.Num_contrat.toString().includes(searchText) || client.intitule.toString().toLowerCase().includes(searchText.toLowerCase()) || client.Num_compteur.toString().includes(searchText) )
  );

  // console.log('----->',expandedItem)
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => setExpandedItem(item.id === expandedItem ? null : item.id)}
    >
      <Text style={styles.text}>Contrat: {item.Num_contrat}</Text>
      <Text style={styles.text}>Intitulé: {item.intitule}</Text>
      {expandedItem === item.id && (
        <View style={styles.itemContent}>
          <Text style={styles.text}>Addresse: {item.Adresse}</Text>
          <Text style={styles.text}>N° Compteur: {item.Num_compteur}</Text>
          <Text style={styles.text}>N° Puce: {item.Num_puce}</Text>
          <Text style={styles.text}>Type: {item.Type}</Text>
          <Text style={styles.text}>PMD: {item.PMD} KW</Text>
          <Text style={styles.text}>TC: {item.TC}</Text>
          {item.TP === '-' || item.TP === '' ? (''): (<Text style={styles.text}>TP: {item.TP}</Text>)}
          <Text style={styles.text}>Crée le: {item.CREATION}</Text>
          <View style={{ position: 'absolute', right: 10, top:10 }}>
            {/* <Feather name="edit" size={24} color="green" onPress={() => handleItemPress(item)} /> */}
            <MaterialCommunityIcons name="file-edit-outline" size={24} color="green" 
            style={{ position: 'absolute', right: 5, top:10 }} onPress={() => handleItemPress(item)} />
            <MaterialCommunityIcons name="delete-outline" size={26} color="red" 
            style={{position: 'absolute', right: 5, top:80}} onPress={() => handleDelete(item)} />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
  function handleDelete(item) {
    navigation.navigate('updateItem', { item });
  }
  return (
    <View style={styles.container}>
      <AboutSvg customStyles={styles.curyStyles}/>
      <Searchbar
        style={styles.searchBar}
        placeholder="Recherche"
        onChangeText={setSearchText}
        value={searchText}
        mode="bar"
      />
      <Text style={styles.railway}>Client Manager</Text>
      {isLoading ? (
        <BallIndicator  color="#0000ff" />
      ) : (
        <FlatList style={{ maxHeight: '76%', borderRadius: 16 }}
          showsVerticalScrollIndicator={false}
          data={filteredClients}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ListEmptyComponent={() => <Text style={{  fontSize: 18,fontFamily:'TitilliumWeb_400Regular'}}>Aucun client n'a été trouvé.</Text>}
          ListHeaderComponent={<View style={{ height: 10 }} />}
          ListFooterComponent={<View style={{ height: 10 }} />}
          ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e4F4',
    alignItems: 'center',
    
  },
  searchBar: {
    width: '90%',
    height: 'auto',
    marginTop: 50,
    fontFamily:'TitilliumWeb_400Regular',
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    // marginVertical: 4,
    marginHorizontal: 16,
    // borderRadius: 5,
    width: 320,
    elevation: 0,
    backgroundColor: "#F8F8FF",


  },
  text: {
    fontSize: 14,
    fontFamily:'TitilliumWeb_400Regular',
  },
  curyStyles: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  separator: {
    width: '80%', 
    alignSelf: 'center',
    color:'red'
  },
  itemContent: {
    marginTop: 10,
    backgroundColor:'#e9ecef',
    padding: 5,
    borderRadius: 10,
  },
  railway: {
    fontSize: 20,
    marginVertical: 20,
    color: "black",
    fontFamily:'TitilliumWeb_400Regular'
  },
});